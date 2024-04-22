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

// @generated by protoc-gen-es v2.0.0-alpha.1 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/rpc/v1alpha1/error.proto (package buf.alpha.rpc.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenDescEnum, GenDescFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

export const fileDesc_buf_alpha_rpc_v1alpha1_error: GenDescFile = /*@__PURE__*/
  fileDesc("CiJidWYvYWxwaGEvcnBjL3YxYWxwaGExL2Vycm9yLnByb3RvEhZidWYuYWxwaGEucnBjLnYxYWxwaGExKoAECglFcnJvckNvZGUSGgoWRVJST1JfQ09ERV9VTlNQRUNJRklFRBAAEhgKFEVSUk9SX0NPREVfQ0FOQ0VMTEVEEAESFgoSRVJST1JfQ09ERV9VTktOT1dOEAISHwobRVJST1JfQ09ERV9JTlZBTElEX0FSR1VNRU5UEAMSIAocRVJST1JfQ09ERV9ERUFETElORV9FWENFRURFRBAEEhgKFEVSUk9SX0NPREVfTk9UX0ZPVU5EEAUSHQoZRVJST1JfQ09ERV9BTFJFQURZX0VYSVNUUxAGEiAKHEVSUk9SX0NPREVfUEVSTUlTU0lPTl9ERU5JRUQQBxIhCh1FUlJPUl9DT0RFX1JFU09VUkNFX0VYSEFVU1RFRBAIEiIKHkVSUk9SX0NPREVfRkFJTEVEX1BSRUNPTkRJVElPThAJEhYKEkVSUk9SX0NPREVfQUJPUlRFRBAKEhsKF0VSUk9SX0NPREVfT1VUX09GX1JBTkdFEAsSHAoYRVJST1JfQ09ERV9VTklNUExFTUVOVEVEEAwSFwoTRVJST1JfQ09ERV9JTlRFUk5BTBANEhoKFkVSUk9SX0NPREVfVU5BVkFJTEFCTEUQDhIYChRFUlJPUl9DT0RFX0RBVEFfTE9TUxAPEh4KGkVSUk9SX0NPREVfVU5BVVRIRU5USUNBVEVEEBBiBnByb3RvMw");

/**
 * Well defined error codes specified as part of the RPC API.
 *
 * @generated from enum buf.alpha.rpc.v1alpha1.ErrorCode
 */
export enum ErrorCode {
  /**
   * @generated from enum value: ERROR_CODE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ERROR_CODE_CANCELLED = 1;
   */
  CANCELLED = 1,

  /**
   * @generated from enum value: ERROR_CODE_UNKNOWN = 2;
   */
  UNKNOWN = 2,

  /**
   * @generated from enum value: ERROR_CODE_INVALID_ARGUMENT = 3;
   */
  INVALID_ARGUMENT = 3,

  /**
   * @generated from enum value: ERROR_CODE_DEADLINE_EXCEEDED = 4;
   */
  DEADLINE_EXCEEDED = 4,

  /**
   * @generated from enum value: ERROR_CODE_NOT_FOUND = 5;
   */
  NOT_FOUND = 5,

  /**
   * @generated from enum value: ERROR_CODE_ALREADY_EXISTS = 6;
   */
  ALREADY_EXISTS = 6,

  /**
   * @generated from enum value: ERROR_CODE_PERMISSION_DENIED = 7;
   */
  PERMISSION_DENIED = 7,

  /**
   * @generated from enum value: ERROR_CODE_RESOURCE_EXHAUSTED = 8;
   */
  RESOURCE_EXHAUSTED = 8,

  /**
   * @generated from enum value: ERROR_CODE_FAILED_PRECONDITION = 9;
   */
  FAILED_PRECONDITION = 9,

  /**
   * @generated from enum value: ERROR_CODE_ABORTED = 10;
   */
  ABORTED = 10,

  /**
   * @generated from enum value: ERROR_CODE_OUT_OF_RANGE = 11;
   */
  OUT_OF_RANGE = 11,

  /**
   * @generated from enum value: ERROR_CODE_UNIMPLEMENTED = 12;
   */
  UNIMPLEMENTED = 12,

  /**
   * @generated from enum value: ERROR_CODE_INTERNAL = 13;
   */
  INTERNAL = 13,

  /**
   * @generated from enum value: ERROR_CODE_UNAVAILABLE = 14;
   */
  UNAVAILABLE = 14,

  /**
   * @generated from enum value: ERROR_CODE_DATA_LOSS = 15;
   */
  DATA_LOSS = 15,

  /**
   * @generated from enum value: ERROR_CODE_UNAUTHENTICATED = 16;
   */
  UNAUTHENTICATED = 16,
}

// Describes the enum buf.alpha.rpc.v1alpha1.ErrorCode.
export const ErrorCodeDesc: GenDescEnum<ErrorCode> = /*@__PURE__*/
  enumDesc(fileDesc_buf_alpha_rpc_v1alpha1_error, 0);

