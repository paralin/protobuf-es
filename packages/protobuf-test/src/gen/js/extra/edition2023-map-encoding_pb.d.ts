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

// @generated by protoc-gen-es v2.0.0-alpha.1 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/edition2023-map-encoding.proto (package spec, edition 2023)
// option features.message_encoding = DELIMITED;
/* eslint-disable */

import type { GenDescFile, GenDescMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

export declare const fileDesc_extra_edition2023_map_encoding: GenDescFile;

/**
 * Map fields are syntactic sugar for a repeated message field with field 1 for
 * key and field 2 for value. Despite that, the file feature message_encoding =
 * DELIMITED should NOT apply to this "synthetic" message.
 *
 * @generated from message spec.Edition2023MapEncodingMessage
 */
export declare type Edition2023MapEncodingMessage = Message<"spec.Edition2023MapEncodingMessage"> & {
  /**
   * @generated from field: map<int32, bool> map_field = 77;
   */
  mapField: { [key: number]: boolean };
};

// Describes the message spec.Edition2023MapEncodingMessage. Use `create(Edition2023MapEncodingMessageDesc)` to create a new Edition2023MapEncodingMessage.
export declare const Edition2023MapEncodingMessageDesc: GenDescMessage<Edition2023MapEncodingMessage>;

