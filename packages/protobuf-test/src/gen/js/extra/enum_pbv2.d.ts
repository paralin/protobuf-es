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

// @generated by protoc-gen-es-next v1.8.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/enum.proto (package spec, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { EnumOptions, EnumValueOptions, Message } from "@bufbuild/protobuf/next";
import type { TypedDescEnum, TypedDescExtension, TypedDescMessage } from "@bufbuild/protobuf/next/codegenv1";

export declare const fileDesc_extra_enum: DescFile;

/**
 * @generated from message spec.EnumMessage
 */
export declare type EnumMessage = Message<"spec.EnumMessage"> & {
  /**
   * @generated from field: spec.EnumMessage.NestedEnum enum_field = 1;
   */
  enumField: EnumMessage_NestedEnum;
};

// Describes the message spec.EnumMessage. Use `create(EnumMessageDesc)` to create a new EnumMessage.
export declare const EnumMessageDesc: TypedDescMessage<EnumMessage>;

/**
 * @generated from enum spec.EnumMessage.NestedEnum
 */
export enum EnumMessage_NestedEnum {
  /**
   * @generated from enum value: NESTED_ZERO = 0;
   */
  NESTED_ZERO = 0,

  /**
   * @generated from enum value: NESTED_ONE = 1;
   */
  NESTED_ONE = 1,
}

// Describes the enum spec.EnumMessage.NestedEnum.
export declare const EnumMessage_NestedEnumDesc: TypedDescEnum<EnumMessage_NestedEnum>;

/**
 * @generated from enum spec.AnnotatedEnum
 */
export enum AnnotatedEnum {
  /**
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: FOO = 1;
   */
  FOO = 1,
}

// Describes the enum spec.AnnotatedEnum.
export declare const AnnotatedEnumDesc: TypedDescEnum<AnnotatedEnum>;

/**
 * @generated from enum spec.SimpleEnum
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

// Describes the enum spec.SimpleEnum.
export declare const SimpleEnumDesc: TypedDescEnum<SimpleEnum>;

/**
 * @generated from enum spec.AliasEnum
 */
export enum AliasEnum {
  /**
   * @generated from enum value: ALIAS_ZERO = 0;
   */
  ALIAS_ZERO = 0,

  /**
   * @generated from enum value: ALIAS_ONE = 1;
   */
  ALIAS_ONE = 1,

  /**
   * @generated from enum value: ALIAS_ONE_ALIASED = 1;
   */
  ALIAS_ONE_ALIASED = 1,
}

// Describes the enum spec.AliasEnum.
export declare const AliasEnumDesc: TypedDescEnum<AliasEnum>;

/**
 * The generated enum values should drop the "PREFIX_"
 * part at the top if the target language allows
 * (basically every language except C++).
 *
 * @generated from enum spec.PrefixEnum
 */
export enum PrefixEnum {
  /**
   * @generated from enum value: PREFIX_ENUM_ZERO = 0;
   */
  ZERO = 0,

  /**
   * @generated from enum value: PREFIX_ENUM_ONE = 1;
   */
  ONE = 1,
}

// Describes the enum spec.PrefixEnum.
export declare const PrefixEnumDesc: TypedDescEnum<PrefixEnum>;

/**
 * @generated from extension: bool enum_opt_bool = 2001;
 */
export declare const enum_opt_bool: TypedDescExtension<EnumOptions, boolean>;

/**
 * @generated from extension: bool enum_value_opt_bool = 3001;
 */
export declare const enum_value_opt_bool: TypedDescExtension<EnumValueOptions, boolean>;
