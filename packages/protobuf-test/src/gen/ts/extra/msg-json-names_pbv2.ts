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

// @generated by protoc-gen-es-next v1.7.2 with parameter "ts_nocheck=false,target=ts"
// @generated from file extra/msg-json-names.proto (package spec, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { TypedDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_extra_msg_json_names: DescFile = fileDesc("ChpleHRyYS9tc2ctanNvbi1uYW1lcy5wcm90bxIEc3BlYyKjAQoQSnNvbk5hbWVzTWVzc2FnZRIpCgxzY2FsYXJfZmllbGQYASABKAlSE3NjYWxhckZpZWxkSnNvbk5hbWUSOgoVcmVwZWF0ZWRfc2NhbGFyX2ZpZWxkGAIgAygJUhtyZXBlYXRlZFNjYWxhckZpZWxkSnNvbk5hbWUSCQoBYRgDIAEoCRILCgFiGAQgASgJUgASEAoBYxgFIAEoCVIFQHR5cGViBnByb3RvMw");

/**
 * @generated from message spec.JsonNamesMessage
 */
export type JsonNamesMessage = Message<"spec.JsonNamesMessage"> & {
  /**
   * @generated from field: string scalar_field = 1 [json_name = "scalarFieldJsonName"];
   */
  scalarField: string;

  /**
   * @generated from field: repeated string repeated_scalar_field = 2 [json_name = "repeatedScalarFieldJsonName"];
   */
  repeatedScalarField: string[];

  /**
   * @generated from field: string a = 3;
   */
  a: string;

  /**
   * @generated from field: string b = 4 [json_name = ""];
   */
  b: string;

  /**
   * @generated from field: string c = 5 [json_name = "@type"];
   */
  c: string;
};

// Describes the message spec.JsonNamesMessage.
// Use `create(JsonNamesMessageDesc)` to create a new JsonNamesMessage.
export const JsonNamesMessageDesc: TypedDescMessage<JsonNamesMessage> = messageDesc(fileDesc_extra_msg_json_names, 0);
