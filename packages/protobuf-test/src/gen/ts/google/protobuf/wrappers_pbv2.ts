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

// @generated by protoc-gen-es-next v1.8.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/protobuf/wrappers.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_google_protobuf_wrappers: DescFile = /*@__PURE__*/
  fileDesc("Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM");

/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 *
 * @generated from message google.protobuf.DoubleValue
 */
export type DoubleValue = Message<"google.protobuf.DoubleValue"> & {
  /**
   * The double value.
   *
   * @generated from field: double value = 1;
   */
  value: number;
};

// Describes the message google.protobuf.DoubleValue.
// Use `create(DoubleValueDesc)` to create a new DoubleValue.
export const DoubleValueDesc: GenDescMessage<DoubleValue> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_wrappers, 0);

/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 *
 * @generated from message google.protobuf.FloatValue
 */
export type FloatValue = Message<"google.protobuf.FloatValue"> & {
  /**
   * The float value.
   *
   * @generated from field: float value = 1;
   */
  value: number;
};

// Describes the message google.protobuf.FloatValue.
// Use `create(FloatValueDesc)` to create a new FloatValue.
export const FloatValueDesc: GenDescMessage<FloatValue> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_wrappers, 1);

/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 *
 * @generated from message google.protobuf.Int64Value
 */
export type Int64Value = Message<"google.protobuf.Int64Value"> & {
  /**
   * The int64 value.
   *
   * @generated from field: int64 value = 1;
   */
  value: bigint;
};

// Describes the message google.protobuf.Int64Value.
// Use `create(Int64ValueDesc)` to create a new Int64Value.
export const Int64ValueDesc: GenDescMessage<Int64Value> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_wrappers, 2);

/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 *
 * @generated from message google.protobuf.UInt64Value
 */
export type UInt64Value = Message<"google.protobuf.UInt64Value"> & {
  /**
   * The uint64 value.
   *
   * @generated from field: uint64 value = 1;
   */
  value: bigint;
};

// Describes the message google.protobuf.UInt64Value.
// Use `create(UInt64ValueDesc)` to create a new UInt64Value.
export const UInt64ValueDesc: GenDescMessage<UInt64Value> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_wrappers, 3);

/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 *
 * @generated from message google.protobuf.Int32Value
 */
export type Int32Value = Message<"google.protobuf.Int32Value"> & {
  /**
   * The int32 value.
   *
   * @generated from field: int32 value = 1;
   */
  value: number;
};

// Describes the message google.protobuf.Int32Value.
// Use `create(Int32ValueDesc)` to create a new Int32Value.
export const Int32ValueDesc: GenDescMessage<Int32Value> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_wrappers, 4);

/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 *
 * @generated from message google.protobuf.UInt32Value
 */
export type UInt32Value = Message<"google.protobuf.UInt32Value"> & {
  /**
   * The uint32 value.
   *
   * @generated from field: uint32 value = 1;
   */
  value: number;
};

// Describes the message google.protobuf.UInt32Value.
// Use `create(UInt32ValueDesc)` to create a new UInt32Value.
export const UInt32ValueDesc: GenDescMessage<UInt32Value> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_wrappers, 5);

/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 *
 * @generated from message google.protobuf.BoolValue
 */
export type BoolValue = Message<"google.protobuf.BoolValue"> & {
  /**
   * The bool value.
   *
   * @generated from field: bool value = 1;
   */
  value: boolean;
};

// Describes the message google.protobuf.BoolValue.
// Use `create(BoolValueDesc)` to create a new BoolValue.
export const BoolValueDesc: GenDescMessage<BoolValue> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_wrappers, 6);

/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 *
 * @generated from message google.protobuf.StringValue
 */
export type StringValue = Message<"google.protobuf.StringValue"> & {
  /**
   * The string value.
   *
   * @generated from field: string value = 1;
   */
  value: string;
};

// Describes the message google.protobuf.StringValue.
// Use `create(StringValueDesc)` to create a new StringValue.
export const StringValueDesc: GenDescMessage<StringValue> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_wrappers, 7);

/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 *
 * @generated from message google.protobuf.BytesValue
 */
export type BytesValue = Message<"google.protobuf.BytesValue"> & {
  /**
   * The bytes value.
   *
   * @generated from field: bytes value = 1;
   */
  value: Uint8Array;
};

// Describes the message google.protobuf.BytesValue.
// Use `create(BytesValueDesc)` to create a new BytesValue.
export const BytesValueDesc: GenDescMessage<BytesValue> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_wrappers, 8);
