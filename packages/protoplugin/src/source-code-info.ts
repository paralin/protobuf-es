// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type {
  DescField,
  DescEnumValue,
  DescExtension,
  DescComments,
  AnyDesc,
  DescFile,
} from "@bufbuild/protobuf";
import { isFieldSet } from "@bufbuild/protobuf";
import { ScalarType, protoCamelCase } from "@bufbuild/protobuf/reflect";
import {
  Edition,
  FieldDescriptorProto_Label,
  FieldDescriptorProto_Type,
  FieldDescriptorProtoDesc,
  FieldOptions_JSType,
  FieldOptionsDesc,
  SourceCodeInfo_LocationDesc,
} from "@bufbuild/protobuf/wkt";
import type { SourceCodeInfo } from "@bufbuild/protobuf/wkt";

/**
 * Get comments on the package element in the protobuf source.
 */
export function getPackageComments(desc: DescFile): DescComments {
  return findComments(desc.proto.sourceCodeInfo, [
    FieldNumber.FileDescriptorProto_Package,
  ]);
}

/**
 * Get comments on the syntax element in the protobuf source.
 */
export function getSyntaxComments(desc: DescFile): DescComments {
  return findComments(desc.proto.sourceCodeInfo, [
    FieldNumber.FileDescriptorProto_Syntax,
  ]);
}

/**
 * Get comments on the element in the protobuf source.
 */
export function getComments(desc: Exclude<AnyDesc, DescFile>): DescComments {
  let path: number[] = [];
  let file: DescFile;
  switch (desc.kind) {
    case "enum":
      path = desc.parent
        ? [
            ...getComments(desc.parent).sourcePath,
            FieldNumber.DescriptorProto_EnumType,
            desc.parent.proto.enumType.indexOf(desc.proto),
          ]
        : [
            FieldNumber.FileDescriptorProto_EnumType,
            desc.file.proto.enumType.indexOf(desc.proto),
          ];
      file = desc.file;
      break;
    case "oneof":
      path = [
        ...getComments(desc.parent).sourcePath,
        FieldNumber.DescriptorProto_OneofDecl,
        desc.parent.proto.oneofDecl.indexOf(desc.proto),
      ];
      file = desc.parent.file;
      break;
    case "message":
      path = desc.parent
        ? [
            ...getComments(desc.parent).sourcePath,
            FieldNumber.DescriptorProto_NestedType,
            desc.parent.proto.nestedType.indexOf(desc.proto),
          ]
        : [
            FieldNumber.FileDescriptorProto_MessageType,
            desc.file.proto.messageType.indexOf(desc.proto),
          ];
      file = desc.file;
      break;
    case "enum_value":
      path = [
        ...getComments(desc.parent).sourcePath,
        FieldNumber.EnumDescriptorProto_Value,
        desc.parent.proto.value.indexOf(desc.proto),
      ];
      file = desc.parent.file;
      break;
    case "field":
      path = [
        ...getComments(desc.parent).sourcePath,
        FieldNumber.DescriptorProto_Field,
        desc.parent.proto.field.indexOf(desc.proto),
      ];
      file = desc.parent.file;
      break;
    case "extension":
      path = desc.parent
        ? [
            ...getComments(desc.parent).sourcePath,
            FieldNumber.DescriptorProto_Extension,
            desc.parent.proto.extension.indexOf(desc.proto),
          ]
        : [
            FieldNumber.FileDescriptorProto_Extension,
            desc.file.proto.extension.indexOf(desc.proto),
          ];
      file = desc.file;
      break;
    case "service":
      path = [
        FieldNumber.FileDescriptorProto_Service,
        desc.file.proto.service.indexOf(desc.proto),
      ];
      file = desc.file;
      break;
    case "rpc":
      path = [
        ...getComments(desc.parent).sourcePath,
        FieldNumber.ServiceDescriptorProto_Method,
        desc.parent.proto.method.indexOf(desc.proto),
      ];
      file = desc.parent.file;
      break;
  }
  return findComments(file.proto.sourceCodeInfo, path);
}

/**
 * Return a string that matches the definition of a field in the protobuf
 * source. Does not take custom options into account.
 */
export function getDeclarationString(
  desc: DescField | DescExtension | DescEnumValue,
): string {
  if (desc.kind === "enum_value") {
    let str = `${desc.name} = ${desc.number}`;
    if (desc.proto.options?.deprecated === true) {
      str += " [deprecated = true]";
    }
    return str;
  }
  const file = desc.kind === "extension" ? desc.file : desc.parent.file;
  const parts: string[] = [];
  function typeName(f: DescField | DescExtension) {
    if (f.message) {
      return f.message.typeName;
    }
    if (f.enum) {
      return f.enum.typeName;
    }
    return ScalarType[f.scalar].toLowerCase();
  }
  switch (desc.fieldKind) {
    case "scalar":
    case "enum":
    case "message":
      if (
        file.edition === Edition.EDITION_PROTO2 &&
        isFieldSet(FieldDescriptorProtoDesc, desc.proto, "label") &&
        desc.proto.label == FieldDescriptorProto_Label.REQUIRED
      ) {
        parts.push("required");
      }
      if (desc.optional) {
        parts.push("optional");
      }
      parts.push(typeName(desc));
      break;
    case "list":
      parts.push("repeated", typeName(desc));
      break;
    case "map": {
      const k = ScalarType[desc.mapKey].toLowerCase();
      const v = typeName(desc);
      parts.push(`map<${k}, ${v}>`);
      break;
    }
  }
  parts.push(desc.name, "=", desc.number.toString());
  const options: string[] = [];
  const protoOptions = desc.proto.options;
  if (
    protoOptions !== undefined &&
    isFieldSet(FieldOptionsDesc, protoOptions, "packed")
  ) {
    options.push(`packed = ${protoOptions.packed.toString()}`);
  }
  if (isFieldSet(FieldDescriptorProtoDesc, desc.proto, "defaultValue")) {
    let defaultValue = desc.proto.defaultValue;
    if (
      desc.proto.type == FieldDescriptorProto_Type.BYTES ||
      desc.proto.type == FieldDescriptorProto_Type.STRING
    ) {
      defaultValue = '"' + defaultValue.replace('"', '\\"') + '"';
    }
    options.push(`default = ${defaultValue}`);
  }
  if (desc.kind == "field" && desc.jsonName !== protoCamelCase(desc.name)) {
    options.push(`json_name = "${desc.jsonName}"`);
  }
  if (
    protoOptions !== undefined &&
    isFieldSet(FieldOptionsDesc, protoOptions, "jstype")
  ) {
    options.push(`jstype = ${FieldOptions_JSType[protoOptions.jstype]}`);
  }
  if (
    protoOptions !== undefined &&
    isFieldSet(FieldOptionsDesc, protoOptions, "deprecated")
  ) {
    options.push(`deprecated = true`);
  }
  if (options.length > 0) {
    parts.push("[" + options.join(", ") + "]");
  }
  return parts.join(" ");
}

/**
 * Find comments.
 */
function findComments(
  sourceCodeInfo: SourceCodeInfo | undefined,
  sourcePath: number[],
): DescComments {
  if (!sourceCodeInfo) {
    return {
      leadingDetached: [],
      sourcePath,
    };
  }
  for (const location of sourceCodeInfo.location) {
    if (location.path.length !== sourcePath.length) {
      continue;
    }
    if (location.path.some((value, index) => sourcePath[index] !== value)) {
      continue;
    }
    return {
      leadingDetached: location.leadingDetachedComments,
      leading: isFieldSet(
        SourceCodeInfo_LocationDesc,
        location,
        "leadingComments",
      )
        ? location.leadingComments
        : undefined,
      trailing: isFieldSet(
        SourceCodeInfo_LocationDesc,
        location,
        "trailingComments",
      )
        ? location.trailingComments
        : undefined,
      sourcePath,
    };
  }
  return {
    leadingDetached: [],
    sourcePath,
  };
}

/**
 * The following field numbers are used to find comments in
 * google.protobuf.SourceCodeInfo.
 */
enum FieldNumber {
  FileDescriptorProto_Package = 2,
  FileDescriptorProto_MessageType = 4,
  FileDescriptorProto_EnumType = 5,
  FileDescriptorProto_Service = 6,
  FileDescriptorProto_Extension = 7,
  FileDescriptorProto_Syntax = 12,
  DescriptorProto_Field = 2, // eslint-disable-line @typescript-eslint/no-duplicate-enum-values
  DescriptorProto_NestedType = 3,
  DescriptorProto_EnumType = 4, // eslint-disable-line @typescript-eslint/no-duplicate-enum-values
  DescriptorProto_Extension = 6, // eslint-disable-line @typescript-eslint/no-duplicate-enum-values
  DescriptorProto_OneofDecl = 8,
  EnumDescriptorProto_Value = 2, // eslint-disable-line @typescript-eslint/no-duplicate-enum-values
  ServiceDescriptorProto_Method = 2, // eslint-disable-line @typescript-eslint/no-duplicate-enum-values
}