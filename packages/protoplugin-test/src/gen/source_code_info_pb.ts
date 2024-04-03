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

// @formatter:off

// Comment before syntax.

// @generated by protoc-gen-es v1.8.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file source_code_info.proto (package testcomments, syntax proto3)
/* eslint-disable */

// Comment after syntax.

// Comment before package.

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Leading comment for enum.
 *
 * Comment between start of enum and first value.
 *
 * @generated from enum testcomments.EnumWithComments
 */
export enum EnumWithComments {
  /**
   * Comment before enum value.
   *
   * Comment next to enum value.
   *
   * @generated from enum value: VALUE = 0;
   */
  VALUE = 0,
}
// Retrieve enum metadata with: proto3.getEnumType(EnumWithComments)
proto3.util.setEnumType(EnumWithComments, "testcomments.EnumWithComments", [
  { no: 0, name: "VALUE" },
]);

/**
 * Leading comment for deprecated enum
 *
 * @generated from enum testcomments.DeprecatedEnumWithComment
 * @deprecated
 */
export enum DeprecatedEnumWithComment {
  /**
   * @generated from enum value: DEPRECATED_ENUM_WITH_COMMENT_A = 0;
   */
  A = 0,

  /**
   * @generated from enum value: DEPRECATED_ENUM_WITH_COMMENT_B = 1;
   */
  B = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(DeprecatedEnumWithComment)
proto3.util.setEnumType(DeprecatedEnumWithComment, "testcomments.DeprecatedEnumWithComment", [
  { no: 0, name: "DEPRECATED_ENUM_WITH_COMMENT_A" },
  { no: 1, name: "DEPRECATED_ENUM_WITH_COMMENT_B" },
]);

/**
 * @generated from enum testcomments.DeprecatedEnumNoComment
 * @deprecated
 */
export enum DeprecatedEnumNoComment {
  /**
   * @generated from enum value: DEPRECATED_ENUM_NO_COMMENT_A = 0;
   */
  A = 0,

  /**
   * @generated from enum value: DEPRECATED_ENUM_NO_COMMENT_B = 1;
   */
  B = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(DeprecatedEnumNoComment)
proto3.util.setEnumType(DeprecatedEnumNoComment, "testcomments.DeprecatedEnumNoComment", [
  { no: 0, name: "DEPRECATED_ENUM_NO_COMMENT_A" },
  { no: 1, name: "DEPRECATED_ENUM_NO_COMMENT_B" },
]);

/**
 * @generated from enum testcomments.SimpleEnum
 */
export enum SimpleEnum {
  /**
   * @generated from enum value: SIMPLE_ZERO = 0;
   */
  SIMPLE_ZERO = 0,

  /**
   * @generated from enum value: SIMPLE_ONE = 1;
   */
  SIMPLE_ONE = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(SimpleEnum)
proto3.util.setEnumType(SimpleEnum, "testcomments.SimpleEnum", [
  { no: 0, name: "SIMPLE_ZERO" },
  { no: 1, name: "SIMPLE_ONE" },
]);

/**
 * @generated from enum testcomments.MapsEnum
 */
export enum MapsEnum {
  /**
   * @generated from enum value: MAPS_ENUM_ANY = 0;
   */
  ANY = 0,

  /**
   * @generated from enum value: MAPS_ENUM_YES = 1;
   */
  YES = 1,

  /**
   * @generated from enum value: MAPS_ENUM_NO = 2;
   */
  NO = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(MapsEnum)
proto3.util.setEnumType(MapsEnum, "testcomments.MapsEnum", [
  { no: 0, name: "MAPS_ENUM_ANY" },
  { no: 1, name: "MAPS_ENUM_YES" },
  { no: 2, name: "MAPS_ENUM_NO" },
]);

/**
 * Comment before message.
 *
 * @generated from message testcomments.MessageWithComments
 */
export class MessageWithComments extends Message<MessageWithComments> {
  /**
   * Comment before field with 5 lines:
   * line 2, next is empty
   *
   * line 4, next is empty
   *
   *
   * Comment next to field.
   *
   * @generated from field: string foo = 1;
   */
  foo = "";

  /**
   * Comment before oneof.
   *
   * Comment after start of oneof.
   *
   * @generated from oneof testcomments.MessageWithComments.result
   */
  result: {
    /**
     * Comment before oneof member.
     *
     * Comment next to oneof member.
     *
     * @generated from field: int32 value = 2;
     */
    value: number;
    case: "value";
  } | {
    /**
     * @generated from field: string error = 3;
     */
    value: string;
    case: "error";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from field: string this_field_has_an_empty_comment = 4;
   */
  thisFieldHasAnEmptyComment = "";

  /**
   * @generated from field: string this_field_is_deprecated = 5 [json_name = "sdf", deprecated = true];
   * @deprecated
   */
  thisFieldIsDeprecated = "";

  constructor(data?: PartialMessage<MessageWithComments>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "testcomments.MessageWithComments";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "foo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "result" },
    { no: 3, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "result" },
    { no: 4, name: "this_field_has_an_empty_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "this_field_is_deprecated", jsonName: "sdf", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageWithComments {
    return new MessageWithComments().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageWithComments {
    return new MessageWithComments().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageWithComments {
    return new MessageWithComments().fromJsonString(jsonString, options);
  }

  static equals(a: MessageWithComments | PlainMessage<MessageWithComments> | undefined, b: MessageWithComments | PlainMessage<MessageWithComments> | undefined): boolean {
    return proto3.util.equals(MessageWithComments, a, b);
  }
}

/**
 * Comment within empty message.
 *
 * @generated from message testcomments.EmptyMessageWithComment
 */
export class EmptyMessageWithComment extends Message<EmptyMessageWithComment> {
  constructor(data?: PartialMessage<EmptyMessageWithComment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "testcomments.EmptyMessageWithComment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmptyMessageWithComment {
    return new EmptyMessageWithComment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmptyMessageWithComment {
    return new EmptyMessageWithComment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmptyMessageWithComment {
    return new EmptyMessageWithComment().fromJsonString(jsonString, options);
  }

  static equals(a: EmptyMessageWithComment | PlainMessage<EmptyMessageWithComment> | undefined, b: EmptyMessageWithComment | PlainMessage<EmptyMessageWithComment> | undefined): boolean {
    return proto3.util.equals(EmptyMessageWithComment, a, b);
  }
}

/**
 * see https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/descriptor.proto
 *
 * @generated from message testcomments.GoogleCommentExample
 */
export class GoogleCommentExample extends Message<GoogleCommentExample> {
  /**
   * Comment attached to foo.
   *
   * @generated from field: int32 foo = 1;
   */
  foo = 0;

  /**
   * Comment attached to bar.
   *
   * @generated from field: int32 bar = 2;
   */
  bar = 0;

  /**
   * Comment attached to baz.
   * Another line attached to baz.
   *
   * @generated from field: string baz = 3;
   */
  baz = "";

  /**
   * Comment attached to qux.
   *
   * Another line attached to qux.
   *
   * @generated from field: double qux = 4;
   */
  qux = 0;

  /**
   * Block comment attached
   * to corge.  Leading asterisks
   * will be removed. 
   *
   * @generated from field: string corge = 5;
   */
  corge = "";

  /**
   * Block comment attached to
   * grault. 
   *
   * @generated from field: int32 grault = 6;
   */
  grault = 0;

  constructor(data?: PartialMessage<GoogleCommentExample>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "testcomments.GoogleCommentExample";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "foo", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "bar", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "baz", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "qux", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "corge", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "grault", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoogleCommentExample {
    return new GoogleCommentExample().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoogleCommentExample {
    return new GoogleCommentExample().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoogleCommentExample {
    return new GoogleCommentExample().fromJsonString(jsonString, options);
  }

  static equals(a: GoogleCommentExample | PlainMessage<GoogleCommentExample> | undefined, b: GoogleCommentExample | PlainMessage<GoogleCommentExample> | undefined): boolean {
    return proto3.util.equals(GoogleCommentExample, a, b);
  }
}

/**
 * @generated from message testcomments.RepeatedScalarValuesMessage
 */
export class RepeatedScalarValuesMessage extends Message<RepeatedScalarValuesMessage> {
  /**
   * @generated from field: repeated double double_field = 1;
   */
  doubleField: number[] = [];

  /**
   * @generated from field: repeated float float_field = 2;
   */
  floatField: number[] = [];

  /**
   * @generated from field: repeated int64 int64_field = 3;
   */
  int64Field: bigint[] = [];

  /**
   * @generated from field: repeated uint64 uint64_field = 4;
   */
  uint64Field: bigint[] = [];

  /**
   * @generated from field: repeated int32 int32_field = 5;
   */
  int32Field: number[] = [];

  /**
   * @generated from field: repeated fixed64 fixed64_field = 6;
   */
  fixed64Field: bigint[] = [];

  /**
   * @generated from field: repeated fixed32 fixed32_field = 7;
   */
  fixed32Field: number[] = [];

  /**
   * @generated from field: repeated bool bool_field = 8;
   */
  boolField: boolean[] = [];

  /**
   * @generated from field: repeated string string_field = 9;
   */
  stringField: string[] = [];

  /**
   * @generated from field: repeated bytes bytes_field = 11;
   */
  bytesField: Uint8Array[] = [];

  /**
   * @generated from field: repeated uint32 uint32_field = 12;
   */
  uint32Field: number[] = [];

  /**
   * @generated from field: repeated sfixed32 sfixed32_field = 14;
   */
  sfixed32Field: number[] = [];

  /**
   * @generated from field: repeated sfixed64 sfixed64_field = 15;
   */
  sfixed64Field: bigint[] = [];

  /**
   * @generated from field: repeated sint32 sint32_field = 16;
   */
  sint32Field: number[] = [];

  /**
   * @generated from field: repeated sint64 sint64_field = 17;
   */
  sint64Field: bigint[] = [];

  constructor(data?: PartialMessage<RepeatedScalarValuesMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "testcomments.RepeatedScalarValuesMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "double_field", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 2, name: "float_field", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 3, name: "int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 4, name: "uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 5, name: "int32_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 6, name: "fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 7, name: "fixed32_field", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true },
    { no: 8, name: "bool_field", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true },
    { no: 9, name: "string_field", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 11, name: "bytes_field", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 12, name: "uint32_field", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 14, name: "sfixed32_field", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true },
    { no: 15, name: "sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 16, name: "sint32_field", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true },
    { no: 17, name: "sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RepeatedScalarValuesMessage {
    return new RepeatedScalarValuesMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RepeatedScalarValuesMessage {
    return new RepeatedScalarValuesMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RepeatedScalarValuesMessage {
    return new RepeatedScalarValuesMessage().fromJsonString(jsonString, options);
  }

  static equals(a: RepeatedScalarValuesMessage | PlainMessage<RepeatedScalarValuesMessage> | undefined, b: RepeatedScalarValuesMessage | PlainMessage<RepeatedScalarValuesMessage> | undefined): boolean {
    return proto3.util.equals(RepeatedScalarValuesMessage, a, b);
  }
}

/**
 * @generated from message testcomments.MapsMessage
 */
export class MapsMessage extends Message<MapsMessage> {
  /**
   * @generated from field: map<string, string> str_str_field = 1;
   */
  strStrField: { [key: string]: string } = {};

  /**
   * @generated from field: map<string, int32> str_int32_field = 2;
   */
  strInt32Field: { [key: string]: number } = {};

  /**
   * @generated from field: map<string, int64> str_int64_field = 3;
   */
  strInt64Field: { [key: string]: bigint } = {};

  /**
   * @generated from field: map<string, bool> str_bool_field = 4;
   */
  strBoolField: { [key: string]: boolean } = {};

  /**
   * @generated from field: map<string, bytes> str_bytes_field = 5;
   */
  strBytesField: { [key: string]: Uint8Array } = {};

  /**
   * @generated from field: map<int32, string> int32_str_field = 6;
   */
  int32StrField: { [key: number]: string } = {};

  /**
   * @generated from field: map<int64, string> int64_str_field = 7;
   */
  int64StrField: { [key: string]: string } = {};

  /**
   * @generated from field: map<bool, string> bool_str_field = 8;
   */
  boolStrField: { [key: string]: string } = {};

  /**
   * @generated from field: map<string, testcomments.MapsMessage> str_msg_field = 9;
   */
  strMsgField: { [key: string]: MapsMessage } = {};

  /**
   * @generated from field: map<int32, testcomments.MapsMessage> int32_msg_field = 10;
   */
  int32MsgField: { [key: number]: MapsMessage } = {};

  /**
   * @generated from field: map<int64, testcomments.MapsMessage> int64_msg_field = 11;
   */
  int64MsgField: { [key: string]: MapsMessage } = {};

  /**
   * @generated from field: map<string, testcomments.MapsEnum> str_enu_field = 12;
   */
  strEnuField: { [key: string]: MapsEnum } = {};

  /**
   * @generated from field: map<int32, testcomments.MapsEnum> int32_enu_field = 13;
   */
  int32EnuField: { [key: number]: MapsEnum } = {};

  /**
   * @generated from field: map<int64, testcomments.MapsEnum> int64_enu_field = 14;
   */
  int64EnuField: { [key: string]: MapsEnum } = {};

  constructor(data?: PartialMessage<MapsMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "testcomments.MapsMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "str_str_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 2, name: "str_int32_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
    { no: 3, name: "str_int64_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 4, name: "str_bool_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
    { no: 5, name: "str_bytes_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
    { no: 6, name: "int32_str_field", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 7, name: "int64_str_field", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 8, name: "bool_str_field", kind: "map", K: 8 /* ScalarType.BOOL */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 9, name: "str_msg_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: MapsMessage} },
    { no: 10, name: "int32_msg_field", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "message", T: MapsMessage} },
    { no: 11, name: "int64_msg_field", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "message", T: MapsMessage} },
    { no: 12, name: "str_enu_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "enum", T: proto3.getEnumType(MapsEnum)} },
    { no: 13, name: "int32_enu_field", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "enum", T: proto3.getEnumType(MapsEnum)} },
    { no: 14, name: "int64_enu_field", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "enum", T: proto3.getEnumType(MapsEnum)} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MapsMessage {
    return new MapsMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MapsMessage {
    return new MapsMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MapsMessage {
    return new MapsMessage().fromJsonString(jsonString, options);
  }

  static equals(a: MapsMessage | PlainMessage<MapsMessage> | undefined, b: MapsMessage | PlainMessage<MapsMessage> | undefined): boolean {
    return proto3.util.equals(MapsMessage, a, b);
  }
}

/**
 * @generated from message testcomments.JsonNamesMessage
 */
export class JsonNamesMessage extends Message<JsonNamesMessage> {
  /**
   * @generated from field: string scalar_field = 1 [json_name = "scalarFieldJsonName"];
   */
  scalarField = "";

  /**
   * @generated from field: repeated string repeated_scalar_field = 2 [json_name = "repeatedScalarFieldJsonName"];
   */
  repeatedScalarField: string[] = [];

  /**
   * @generated from field: string a = 3;
   */
  a = "";

  /**
   * @generated from field: string b = 4 [json_name = ""];
   */
  b = "";

  /**
   * @generated from field: string c = 5 [json_name = "@type"];
   */
  c = "";

  constructor(data?: PartialMessage<JsonNamesMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "testcomments.JsonNamesMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "scalar_field", jsonName: "scalarFieldJsonName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repeated_scalar_field", jsonName: "repeatedScalarFieldJsonName", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "a", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "b", jsonName: "", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "c", jsonName: "@type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JsonNamesMessage {
    return new JsonNamesMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JsonNamesMessage {
    return new JsonNamesMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JsonNamesMessage {
    return new JsonNamesMessage().fromJsonString(jsonString, options);
  }

  static equals(a: JsonNamesMessage | PlainMessage<JsonNamesMessage> | undefined, b: JsonNamesMessage | PlainMessage<JsonNamesMessage> | undefined): boolean {
    return proto3.util.equals(JsonNamesMessage, a, b);
  }
}
