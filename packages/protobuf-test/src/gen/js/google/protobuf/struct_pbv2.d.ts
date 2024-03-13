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

// @generated by protoc-gen-es-next v1.7.2 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/struct.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { Message } from "@bufbuild/protobuf/next";
import type { TypedDescEnum, TypedDescMessage } from "@bufbuild/protobuf/next/codegenv1";

export declare const fileDesc_google_protobuf_struct: DescFile;

/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 *
 * @generated from message google.protobuf.Struct
 */
export declare type Struct = Message<"google.protobuf.Struct"> & {
  /**
   * Unordered map of dynamically typed values.
   *
   * @generated from field: map<string, google.protobuf.Value> fields = 1;
   */
  fields: { [key: string]: Value };
};

// Describes the message google.protobuf.Struct. Use `create(StructDesc)` to create a new Struct.
export declare const StructDesc: TypedDescMessage<Struct>;

/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of these
 * variants. Absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 *
 * @generated from message google.protobuf.Value
 */
export declare type Value = Message<"google.protobuf.Value"> & {
  /**
   * The kind of value.
   *
   * @generated from oneof google.protobuf.Value.kind
   */
  kind: {
    /**
     * Represents a null value.
     *
     * @generated from field: google.protobuf.NullValue null_value = 1;
     */
    value: NullValue;
    case: "nullValue";
  } | {
    /**
     * Represents a double value.
     *
     * @generated from field: double number_value = 2;
     */
    value: number;
    case: "numberValue";
  } | {
    /**
     * Represents a string value.
     *
     * @generated from field: string string_value = 3;
     */
    value: string;
    case: "stringValue";
  } | {
    /**
     * Represents a boolean value.
     *
     * @generated from field: bool bool_value = 4;
     */
    value: boolean;
    case: "boolValue";
  } | {
    /**
     * Represents a structured value.
     *
     * @generated from field: google.protobuf.Struct struct_value = 5;
     */
    value: Struct;
    case: "structValue";
  } | {
    /**
     * Represents a repeated `Value`.
     *
     * @generated from field: google.protobuf.ListValue list_value = 6;
     */
    value: ListValue;
    case: "listValue";
  } | { case: undefined; value?: undefined };
};

// Describes the message google.protobuf.Value. Use `create(ValueDesc)` to create a new Value.
export declare const ValueDesc: TypedDescMessage<Value>;

/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 *
 * @generated from message google.protobuf.ListValue
 */
export declare type ListValue = Message<"google.protobuf.ListValue"> & {
  /**
   * Repeated field of dynamically typed values.
   *
   * @generated from field: repeated google.protobuf.Value values = 1;
   */
  values: Value[];
};

// Describes the message google.protobuf.ListValue. Use `create(ListValueDesc)` to create a new ListValue.
export declare const ListValueDesc: TypedDescMessage<ListValue>;

/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 * The JSON representation for `NullValue` is JSON `null`.
 *
 * @generated from enum google.protobuf.NullValue
 */
export enum NullValue {
  /**
   * Null value.
   *
   * @generated from enum value: NULL_VALUE = 0;
   */
  NULL_VALUE = 0,
}

// Describes the enum google.protobuf.NullValue.
export declare const NullValueDesc: TypedDescEnum<NullValue>;
