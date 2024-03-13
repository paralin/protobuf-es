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
// @generated from file extra/extensions-proto2.proto (package proto2ext, syntax proto2)
/* eslint-disable */

import { enumDesc, extDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc_extra_example } from "./example_pbv2.js";
import { fileDesc_google_protobuf_wrappers } from "@bufbuild/protobuf/next";

export const fileDesc_extra_extensions_proto2 = fileDesc("Ch1leHRyYS9leHRlbnNpb25zLXByb3RvMi5wcm90bxIJcHJvdG8yZXh0IisKDlByb3RvMkV4dGVuZGVlEhEKCW93bl9maWVsZBgBIAEoBSoGCOgHEJBOIigKEFByb3RvMkV4dE1lc3NhZ2USFAoMc3RyaW5nX2ZpZWxkGAEgASgJIiAKCEdyb3VwRXh0EgkKAWEYASABKAUSCQoBYhgCIAEoBSIoChBSZXBlYXRlZEdyb3VwRXh0EgkKAWEYASABKAUSCQoBYhgCIAEoBSKTAQoSUHJvdG8yRXh0Q29udGFpbmVyGkIKBUNoaWxkMjkKCnVpbnQzMl9leHQSGS5wcm90bzJleHQuUHJvdG8yRXh0ZW5kZWUYskYgASgNUgl1aW50MzJFeHQyOQoKdWludDMyX2V4dBIZLnByb3RvMmV4dC5Qcm90bzJFeHRlbmRlZRipRiABKA1SCXVpbnQzMkV4dCpACg1Qcm90bzJFeHRFbnVtEhcKE1BST1RPMl9FWFRfRU5VTV9ZRVMQARIWChJQUk9UTzJfRVhUX0VOVU1fTk8QAjo5Cgp1aW50MzJfZXh0EhkucHJvdG8yZXh0LlByb3RvMkV4dGVuZGVlGOkHIAEoDVIJdWludDMyRXh0OlYKF3VpbnQzMl9leHRfd2l0aF9kZWZhdWx0EhkucHJvdG8yZXh0LlByb3RvMkV4dGVuZGVlGOoHIAEoDToDOTk5UhR1aW50MzJFeHRXaXRoRGVmYXVsdDo5CgpzdHJpbmdfZXh0EhkucHJvdG8yZXh0LlByb3RvMkV4dGVuZGVlGNEPIAEoCVIJc3RyaW5nRXh0Ol4KF3N0cmluZ19leHRfd2l0aF9kZWZhdWx0EhkucHJvdG8yZXh0LlByb3RvMkV4dGVuZGVlGNIPIAEoCToLaGVsbG8gIiAqLyBSFHN0cmluZ0V4dFdpdGhEZWZhdWx0OjkKCnVpbnQ2NF9leHQSGS5wcm90bzJleHQuUHJvdG8yRXh0ZW5kZWUYuRcgASgEUgl1aW50NjRFeHQ6TwoUdWludDY0X2V4dF9qc19zdHJpbmcSGS5wcm90bzJleHQuUHJvdG8yRXh0ZW5kZWUYuhcgASgEQgIwAVIRdWludDY0RXh0SnNTdHJpbmc6NwoJYnl0ZXNfZXh0EhkucHJvdG8yZXh0LlByb3RvMkV4dGVuZGVlGKEfIAEoDFIIYnl0ZXNFeHQ6dgoWYnl0ZXNfZXh0X3dpdGhfZGVmYXVsdBIZLnByb3RvMmV4dC5Qcm90bzJFeHRlbmRlZRiiHyABKAw6JVwwMDB4XFx4XCJ4XCdBQUFBQUFcMDEwXDAxNFxuXHJcdFwwMTNSE2J5dGVzRXh0V2l0aERlZmF1bHQ6TwoIZW51bV9leHQSGS5wcm90bzJleHQuUHJvdG8yRXh0ZW5kZWUYiScgASgOMhgucHJvdG8yZXh0LlByb3RvMkV4dEVudW1SB2VudW1FeHQ6ewoVZW51bV9leHRfd2l0aF9kZWZhdWx0EhkucHJvdG8yZXh0LlByb3RvMkV4dGVuZGVlGIonIAEoDjIYLnByb3RvMmV4dC5Qcm90bzJFeHRFbnVtOhJQUk9UTzJfRVhUX0VOVU1fTk9SEmVudW1FeHRXaXRoRGVmYXVsdDpYCgttZXNzYWdlX2V4dBIZLnByb3RvMmV4dC5Qcm90bzJFeHRlbmRlZRjxLiABKAsyGy5wcm90bzJleHQuUHJvdG8yRXh0TWVzc2FnZVIKbWVzc2FnZUV4dDpUChJtZXNzYWdlX2V4dF9wcm90bzMSGS5wcm90bzJleHQuUHJvdG8yRXh0ZW5kZWUY8i4gASgLMgouZG9jcy5Vc2VyUhBtZXNzYWdlRXh0UHJvdG8zOmkKFHJlcGVhdGVkX21lc3NhZ2VfZXh0EhkucHJvdG8yZXh0LlByb3RvMkV4dGVuZGVlGNk2IAMoCzIbLnByb3RvMmV4dC5Qcm90bzJFeHRNZXNzYWdlUhJyZXBlYXRlZE1lc3NhZ2VFeHQ6YAoRcmVwZWF0ZWRfZW51bV9leHQSGS5wcm90bzJleHQuUHJvdG8yRXh0ZW5kZWUY3TYgAygOMhgucHJvdG8yZXh0LlByb3RvMkV4dEVudW1SD3JlcGVhdGVkRW51bUV4dDpKChNyZXBlYXRlZF9zdHJpbmdfZXh0EhkucHJvdG8yZXh0LlByb3RvMkV4dGVuZGVlGNo2IAMoCVIRcmVwZWF0ZWRTdHJpbmdFeHQ6SgoRcGFja2VkX3VpbnQzMl9leHQSGS5wcm90bzJleHQuUHJvdG8yRXh0ZW5kZWUY2zYgAygNQgIQAVIPcGFja2VkVWludDMyRXh0OkoKE3VucGFja2VkX3VpbnQzMl9leHQSGS5wcm90bzJleHQuUHJvdG8yRXh0ZW5kZWUY3DYgAygNUhF1bnBhY2tlZFVpbnQzMkV4dDpZCgt3cmFwcGVyX2V4dBIZLnByb3RvMmV4dC5Qcm90bzJFeHRlbmRlZRjBPiABKAsyHC5nb29nbGUucHJvdG9idWYuVUludDMyVmFsdWVSCndyYXBwZXJFeHQ6SwoIZ3JvdXBleHQSGS5wcm90bzJleHQuUHJvdG8yRXh0ZW5kZWUYpD8gASgKMhMucHJvdG8yZXh0Lkdyb3VwRXh0Ughncm91cGV4dDpjChByZXBlYXRlZGdyb3VwZXh0EhkucHJvdG8yZXh0LlByb3RvMkV4dGVuZGVlGKU/IAMoCjIbLnByb3RvMmV4dC5SZXBlYXRlZEdyb3VwRXh0UhByZXBlYXRlZGdyb3VwZXh0", [fileDesc_extra_example, fileDesc_google_protobuf_wrappers]);

// Describes the message proto2ext.Proto2Extendee. Use `create(Proto2ExtendeeDesc)` to create a new Proto2Extendee.
export const Proto2ExtendeeDesc = messageDesc(fileDesc_extra_extensions_proto2, 0);

// Describes the message proto2ext.Proto2ExtMessage. Use `create(Proto2ExtMessageDesc)` to create a new Proto2ExtMessage.
export const Proto2ExtMessageDesc = messageDesc(fileDesc_extra_extensions_proto2, 1);

// Describes the message proto2ext.GroupExt. Use `create(GroupExtDesc)` to create a new GroupExt.
export const GroupExtDesc = messageDesc(fileDesc_extra_extensions_proto2, 2);

// Describes the message proto2ext.RepeatedGroupExt. Use `create(RepeatedGroupExtDesc)` to create a new RepeatedGroupExt.
export const RepeatedGroupExtDesc = messageDesc(fileDesc_extra_extensions_proto2, 3);

// Describes the message proto2ext.Proto2ExtContainer. Use `create(Proto2ExtContainerDesc)` to create a new Proto2ExtContainer.
export const Proto2ExtContainerDesc = messageDesc(fileDesc_extra_extensions_proto2, 4);

// Describes the message proto2ext.Proto2ExtContainer.Child. Use `create(Proto2ExtContainer_ChildDesc)` to create a new Proto2ExtContainer_Child.
export const Proto2ExtContainer_ChildDesc = messageDesc(fileDesc_extra_extensions_proto2, 4, 0);

/**
 * @generated from extension: optional uint32 uint32_ext = 9010;
 */
export const Proto2ExtContainer_Child_uint32_ext = extDesc(fileDesc_extra_extensions_proto2, 4, 0, 0);

/**
 * @generated from extension: optional uint32 uint32_ext = 9001;
 */
export const Proto2ExtContainer_uint32_ext = extDesc(fileDesc_extra_extensions_proto2, 4, 0);

// Describes the enum proto2ext.Proto2ExtEnum.
export const Proto2ExtEnumDesc = enumDesc(fileDesc_extra_extensions_proto2, 0);

/**
 * An enumeration used in extensions
 *
 * @generated from enum proto2ext.Proto2ExtEnum
 */
export const Proto2ExtEnum = tsEnum(Proto2ExtEnumDesc);

/**
 * @generated from extension: optional uint32 uint32_ext = 1001;
 */
export const uint32_ext = extDesc(fileDesc_extra_extensions_proto2, 0);

/**
 * @generated from extension: optional uint32 uint32_ext_with_default = 1002 [default = 999];
 */
export const uint32_ext_with_default = extDesc(fileDesc_extra_extensions_proto2, 1);

/**
 * @generated from extension: optional string string_ext = 2001;
 */
export const string_ext = extDesc(fileDesc_extra_extensions_proto2, 2);

/**
 * @generated from extension: optional string string_ext_with_default = 2002 [default = "hello \" *\/ "];
 */
export const string_ext_with_default = extDesc(fileDesc_extra_extensions_proto2, 3);

/**
 * @generated from extension: optional uint64 uint64_ext = 3001;
 */
export const uint64_ext = extDesc(fileDesc_extra_extensions_proto2, 4);

/**
 * @generated from extension: optional uint64 uint64_ext_js_string = 3002 [jstype = JS_STRING];
 */
export const uint64_ext_js_string = extDesc(fileDesc_extra_extensions_proto2, 5);

/**
 * @generated from extension: optional bytes bytes_ext = 4001;
 */
export const bytes_ext = extDesc(fileDesc_extra_extensions_proto2, 6);

/**
 * @generated from extension: optional bytes bytes_ext_with_default = 4002 [default = "\000x\\x\\"x\'AAAAAA\010\014\n\r\t\013"];
 */
export const bytes_ext_with_default = extDesc(fileDesc_extra_extensions_proto2, 7);

/**
 * @generated from extension: optional proto2ext.Proto2ExtEnum enum_ext = 5001;
 */
export const enum_ext = extDesc(fileDesc_extra_extensions_proto2, 8);

/**
 * @generated from extension: optional proto2ext.Proto2ExtEnum enum_ext_with_default = 5002 [default = PROTO2_EXT_ENUM_NO];
 */
export const enum_ext_with_default = extDesc(fileDesc_extra_extensions_proto2, 9);

/**
 * @generated from extension: optional proto2ext.Proto2ExtMessage message_ext = 6001;
 */
export const message_ext = extDesc(fileDesc_extra_extensions_proto2, 10);

/**
 * @generated from extension: optional docs.User message_ext_proto3 = 6002;
 */
export const message_ext_proto3 = extDesc(fileDesc_extra_extensions_proto2, 11);

/**
 * @generated from extension: repeated proto2ext.Proto2ExtMessage repeated_message_ext = 7001;
 */
export const repeated_message_ext = extDesc(fileDesc_extra_extensions_proto2, 12);

/**
 * @generated from extension: repeated proto2ext.Proto2ExtEnum repeated_enum_ext = 7005;
 */
export const repeated_enum_ext = extDesc(fileDesc_extra_extensions_proto2, 13);

/**
 * @generated from extension: repeated string repeated_string_ext = 7002;
 */
export const repeated_string_ext = extDesc(fileDesc_extra_extensions_proto2, 14);

/**
 * @generated from extension: repeated uint32 packed_uint32_ext = 7003 [packed = true];
 */
export const packed_uint32_ext = extDesc(fileDesc_extra_extensions_proto2, 15);

/**
 * unpacked by default in proto2
 *
 * @generated from extension: repeated uint32 unpacked_uint32_ext = 7004;
 */
export const unpacked_uint32_ext = extDesc(fileDesc_extra_extensions_proto2, 16);

/**
 * @generated from extension: optional google.protobuf.UInt32Value wrapper_ext = 8001;
 */
export const wrapper_ext = extDesc(fileDesc_extra_extensions_proto2, 17);

/**
 * @generated from extension: optional proto2ext.GroupExt groupext = 8100;
 */
export const groupext = extDesc(fileDesc_extra_extensions_proto2, 18);

/**
 * @generated from extension: repeated proto2ext.RepeatedGroupExt repeatedgroupext = 8101;
 */
export const repeatedgroupext = extDesc(fileDesc_extra_extensions_proto2, 19);
