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
// @generated from file buf/alpha/registry/v1alpha1/user.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { GenDescEnum, GenDescMessage, GenDescService } from "@bufbuild/protobuf/next/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { OrganizationRole, ServerRole } from "./role_pbv2.js";
import { fileDesc_buf_alpha_registry_v1alpha1_role } from "./role_pbv2.js";
import type { Timestamp } from "@bufbuild/protobuf/next/wkt";
import { fileDesc_google_protobuf_timestamp } from "@bufbuild/protobuf/next/wkt";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_buf_alpha_registry_v1alpha1_user: DescFile = /*@__PURE__*/
  fileDesc("CiZidWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvdXNlci5wcm90bxIbYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExIpsBCgRVc2VyEgoKAmlkGAEgASgJEi8KC2NyZWF0ZV90aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIvCgt1cGRhdGVfdGltZRgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASEAoIdXNlcm5hbWUYBCABKAkSEwoLZGVhY3RpdmF0ZWQYBSABKAgipgEKEE9yZ2FuaXphdGlvblVzZXISLwoEdXNlchgBIAEoCzIhLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5Vc2VyEhcKD29yZ2FuaXphdGlvbl9pZBgCIAEoCRJIChFvcmdhbml6YXRpb25fcm9sZRgDIAEoDjItLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5Pcmdhbml6YXRpb25Sb2xlIiUKEUNyZWF0ZVVzZXJSZXF1ZXN0EhAKCHVzZXJuYW1lGAEgASgJIkUKEkNyZWF0ZVVzZXJSZXNwb25zZRIvCgR1c2VyGAEgASgLMiEuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlVzZXIiHAoOR2V0VXNlclJlcXVlc3QSCgoCaWQYASABKAkiQgoPR2V0VXNlclJlc3BvbnNlEi8KBHVzZXIYASABKAsyIS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuVXNlciIsChhHZXRVc2VyQnlVc2VybmFtZVJlcXVlc3QSEAoIdXNlcm5hbWUYASABKAkiTAoZR2V0VXNlckJ5VXNlcm5hbWVSZXNwb25zZRIvCgR1c2VyGAEgASgLMiEuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlVzZXIijQEKEExpc3RVc2Vyc1JlcXVlc3QSEQoJcGFnZV9zaXplGAEgASgNEhIKCnBhZ2VfdG9rZW4YAiABKAkSDwoHcmV2ZXJzZRgDIAEoCBJBChF1c2VyX3N0YXRlX2ZpbHRlchgEIAEoDjImLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5Vc2VyU3RhdGUiXgoRTGlzdFVzZXJzUmVzcG9uc2USMAoFdXNlcnMYASADKAsyIS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuVXNlchIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkibwocTGlzdE9yZ2FuaXphdGlvblVzZXJzUmVxdWVzdBIXCg9vcmdhbml6YXRpb25faWQYASABKAkSEQoJcGFnZV9zaXplGAIgASgNEhIKCnBhZ2VfdG9rZW4YAyABKAkSDwoHcmV2ZXJzZRgEIAEoCCJ2Ch1MaXN0T3JnYW5pemF0aW9uVXNlcnNSZXNwb25zZRI8CgV1c2VycxgBIAMoCzItLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5Pcmdhbml6YXRpb25Vc2VyEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCSITChFEZWxldGVVc2VyUmVxdWVzdCIUChJEZWxldGVVc2VyUmVzcG9uc2UiIwoVRGVhY3RpdmF0ZVVzZXJSZXF1ZXN0EgoKAmlkGAEgASgJIhgKFkRlYWN0aXZhdGVVc2VyUmVzcG9uc2UibAobVXBkYXRlVXNlclNlcnZlclJvbGVSZXF1ZXN0Eg8KB3VzZXJfaWQYASABKAkSPAoLc2VydmVyX3JvbGUYAiABKA4yJy5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuU2VydmVyUm9sZSIeChxVcGRhdGVVc2VyU2VydmVyUm9sZVJlc3BvbnNlIlYKEUNvdW50VXNlcnNSZXF1ZXN0EkEKEXVzZXJfc3RhdGVfZmlsdGVyGAEgASgOMiYuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlVzZXJTdGF0ZSIpChJDb3VudFVzZXJzUmVzcG9uc2USEwoLdG90YWxfY291bnQYASABKA0qWgoJVXNlclN0YXRlEhoKFlVTRVJfU1RBVEVfVU5TUEVDSUZJRUQQABIVChFVU0VSX1NUQVRFX0FDVElWRRABEhoKFlVTRVJfU1RBVEVfREVBQ1RJVkFURUQQAjLLCAoLVXNlclNlcnZpY2USbQoKQ3JlYXRlVXNlchIuLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5DcmVhdGVVc2VyUmVxdWVzdBovLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5DcmVhdGVVc2VyUmVzcG9uc2USZAoHR2V0VXNlchIrLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5HZXRVc2VyUmVxdWVzdBosLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5HZXRVc2VyUmVzcG9uc2USggEKEUdldFVzZXJCeVVzZXJuYW1lEjUuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkdldFVzZXJCeVVzZXJuYW1lUmVxdWVzdBo2LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5HZXRVc2VyQnlVc2VybmFtZVJlc3BvbnNlEmoKCUxpc3RVc2VycxItLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5MaXN0VXNlcnNSZXF1ZXN0Gi4uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkxpc3RVc2Vyc1Jlc3BvbnNlEo4BChVMaXN0T3JnYW5pemF0aW9uVXNlcnMSOS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuTGlzdE9yZ2FuaXphdGlvblVzZXJzUmVxdWVzdBo6LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5MaXN0T3JnYW5pemF0aW9uVXNlcnNSZXNwb25zZRJtCgpEZWxldGVVc2VyEi4uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkRlbGV0ZVVzZXJSZXF1ZXN0Gi8uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkRlbGV0ZVVzZXJSZXNwb25zZRJ5Cg5EZWFjdGl2YXRlVXNlchIyLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5EZWFjdGl2YXRlVXNlclJlcXVlc3QaMy5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuRGVhY3RpdmF0ZVVzZXJSZXNwb25zZRKLAQoUVXBkYXRlVXNlclNlcnZlclJvbGUSOC5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuVXBkYXRlVXNlclNlcnZlclJvbGVSZXF1ZXN0GjkuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlVwZGF0ZVVzZXJTZXJ2ZXJSb2xlUmVzcG9uc2USbQoKQ291bnRVc2VycxIuLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5Db3VudFVzZXJzUmVxdWVzdBovLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5Db3VudFVzZXJzUmVzcG9uc2ViBnByb3RvMw", [fileDesc_buf_alpha_registry_v1alpha1_role, fileDesc_google_protobuf_timestamp]);

/**
 * @generated from message buf.alpha.registry.v1alpha1.User
 */
export type User = Message<"buf.alpha.registry.v1alpha1.User"> & {
  /**
   * primary key, unique, immutable
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * immutable
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * mutable
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;

  /**
   * unique, mutable
   *
   * @generated from field: string username = 4;
   */
  username: string;

  /**
   * mutable
   *
   * @generated from field: bool deactivated = 5;
   */
  deactivated: boolean;
};

// Describes the message buf.alpha.registry.v1alpha1.User.
// Use `create(UserDesc)` to create a new User.
export const UserDesc: GenDescMessage<User> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 0);

/**
 * TODO: #663 move this to organization service
 *
 * @generated from message buf.alpha.registry.v1alpha1.OrganizationUser
 */
export type OrganizationUser = Message<"buf.alpha.registry.v1alpha1.OrganizationUser"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.User user = 1;
   */
  user?: User;

  /**
   * The ID of the organization for which the role belongs to.
   *
   * @generated from field: string organization_id = 2;
   */
  organizationId: string;

  /**
   * The role that the user has in the organization above.
   *
   * @generated from field: buf.alpha.registry.v1alpha1.OrganizationRole organization_role = 3;
   */
  organizationRole: OrganizationRole;
};

// Describes the message buf.alpha.registry.v1alpha1.OrganizationUser.
// Use `create(OrganizationUserDesc)` to create a new OrganizationUser.
export const OrganizationUserDesc: GenDescMessage<OrganizationUser> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 1);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateUserRequest
 */
export type CreateUserRequest = Message<"buf.alpha.registry.v1alpha1.CreateUserRequest"> & {
  /**
   * @generated from field: string username = 1;
   */
  username: string;
};

// Describes the message buf.alpha.registry.v1alpha1.CreateUserRequest.
// Use `create(CreateUserRequestDesc)` to create a new CreateUserRequest.
export const CreateUserRequestDesc: GenDescMessage<CreateUserRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 2);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateUserResponse
 */
export type CreateUserResponse = Message<"buf.alpha.registry.v1alpha1.CreateUserResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.User user = 1;
   */
  user?: User;
};

// Describes the message buf.alpha.registry.v1alpha1.CreateUserResponse.
// Use `create(CreateUserResponseDesc)` to create a new CreateUserResponse.
export const CreateUserResponseDesc: GenDescMessage<CreateUserResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 3);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetUserRequest
 */
export type GetUserRequest = Message<"buf.alpha.registry.v1alpha1.GetUserRequest"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;
};

// Describes the message buf.alpha.registry.v1alpha1.GetUserRequest.
// Use `create(GetUserRequestDesc)` to create a new GetUserRequest.
export const GetUserRequestDesc: GenDescMessage<GetUserRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 4);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetUserResponse
 */
export type GetUserResponse = Message<"buf.alpha.registry.v1alpha1.GetUserResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.User user = 1;
   */
  user?: User;
};

// Describes the message buf.alpha.registry.v1alpha1.GetUserResponse.
// Use `create(GetUserResponseDesc)` to create a new GetUserResponse.
export const GetUserResponseDesc: GenDescMessage<GetUserResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 5);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetUserByUsernameRequest
 */
export type GetUserByUsernameRequest = Message<"buf.alpha.registry.v1alpha1.GetUserByUsernameRequest"> & {
  /**
   * @generated from field: string username = 1;
   */
  username: string;
};

// Describes the message buf.alpha.registry.v1alpha1.GetUserByUsernameRequest.
// Use `create(GetUserByUsernameRequestDesc)` to create a new GetUserByUsernameRequest.
export const GetUserByUsernameRequestDesc: GenDescMessage<GetUserByUsernameRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 6);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetUserByUsernameResponse
 */
export type GetUserByUsernameResponse = Message<"buf.alpha.registry.v1alpha1.GetUserByUsernameResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.User user = 1;
   */
  user?: User;
};

// Describes the message buf.alpha.registry.v1alpha1.GetUserByUsernameResponse.
// Use `create(GetUserByUsernameResponseDesc)` to create a new GetUserByUsernameResponse.
export const GetUserByUsernameResponseDesc: GenDescMessage<GetUserByUsernameResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 7);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListUsersRequest
 */
export type ListUsersRequest = Message<"buf.alpha.registry.v1alpha1.ListUsersRequest"> & {
  /**
   * @generated from field: uint32 page_size = 1;
   */
  pageSize: number;

  /**
   * The first page is returned if this is empty.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  /**
   * @generated from field: bool reverse = 3;
   */
  reverse: boolean;

  /**
   * If the user_state_filter is unspecified, all users are included.
   *
   * @generated from field: buf.alpha.registry.v1alpha1.UserState user_state_filter = 4;
   */
  userStateFilter: UserState;
};

// Describes the message buf.alpha.registry.v1alpha1.ListUsersRequest.
// Use `create(ListUsersRequestDesc)` to create a new ListUsersRequest.
export const ListUsersRequestDesc: GenDescMessage<ListUsersRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 8);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListUsersResponse
 */
export type ListUsersResponse = Message<"buf.alpha.registry.v1alpha1.ListUsersResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.User users = 1;
   */
  users: User[];

  /**
   * There are no more pages if this is empty.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

// Describes the message buf.alpha.registry.v1alpha1.ListUsersResponse.
// Use `create(ListUsersResponseDesc)` to create a new ListUsersResponse.
export const ListUsersResponseDesc: GenDescMessage<ListUsersResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 9);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListOrganizationUsersRequest
 */
export type ListOrganizationUsersRequest = Message<"buf.alpha.registry.v1alpha1.ListOrganizationUsersRequest"> & {
  /**
   * @generated from field: string organization_id = 1;
   */
  organizationId: string;

  /**
   * @generated from field: uint32 page_size = 2;
   */
  pageSize: number;

  /**
   * The first page is returned if this is empty.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * @generated from field: bool reverse = 4;
   */
  reverse: boolean;
};

// Describes the message buf.alpha.registry.v1alpha1.ListOrganizationUsersRequest.
// Use `create(ListOrganizationUsersRequestDesc)` to create a new ListOrganizationUsersRequest.
export const ListOrganizationUsersRequestDesc: GenDescMessage<ListOrganizationUsersRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 10);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListOrganizationUsersResponse
 */
export type ListOrganizationUsersResponse = Message<"buf.alpha.registry.v1alpha1.ListOrganizationUsersResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.OrganizationUser users = 1;
   */
  users: OrganizationUser[];

  /**
   * There are no more pages if this is empty.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

// Describes the message buf.alpha.registry.v1alpha1.ListOrganizationUsersResponse.
// Use `create(ListOrganizationUsersResponseDesc)` to create a new ListOrganizationUsersResponse.
export const ListOrganizationUsersResponseDesc: GenDescMessage<ListOrganizationUsersResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 11);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteUserRequest
 */
export type DeleteUserRequest = Message<"buf.alpha.registry.v1alpha1.DeleteUserRequest"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.DeleteUserRequest.
// Use `create(DeleteUserRequestDesc)` to create a new DeleteUserRequest.
export const DeleteUserRequestDesc: GenDescMessage<DeleteUserRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 12);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteUserResponse
 */
export type DeleteUserResponse = Message<"buf.alpha.registry.v1alpha1.DeleteUserResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.DeleteUserResponse.
// Use `create(DeleteUserResponseDesc)` to create a new DeleteUserResponse.
export const DeleteUserResponseDesc: GenDescMessage<DeleteUserResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 13);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeactivateUserRequest
 */
export type DeactivateUserRequest = Message<"buf.alpha.registry.v1alpha1.DeactivateUserRequest"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;
};

// Describes the message buf.alpha.registry.v1alpha1.DeactivateUserRequest.
// Use `create(DeactivateUserRequestDesc)` to create a new DeactivateUserRequest.
export const DeactivateUserRequestDesc: GenDescMessage<DeactivateUserRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 14);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeactivateUserResponse
 */
export type DeactivateUserResponse = Message<"buf.alpha.registry.v1alpha1.DeactivateUserResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.DeactivateUserResponse.
// Use `create(DeactivateUserResponseDesc)` to create a new DeactivateUserResponse.
export const DeactivateUserResponseDesc: GenDescMessage<DeactivateUserResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 15);

/**
 * @generated from message buf.alpha.registry.v1alpha1.UpdateUserServerRoleRequest
 */
export type UpdateUserServerRoleRequest = Message<"buf.alpha.registry.v1alpha1.UpdateUserServerRoleRequest"> & {
  /**
   * The ID of the user for which to be updated a role.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * The new role of the user in the server.
   *
   * @generated from field: buf.alpha.registry.v1alpha1.ServerRole server_role = 2;
   */
  serverRole: ServerRole;
};

// Describes the message buf.alpha.registry.v1alpha1.UpdateUserServerRoleRequest.
// Use `create(UpdateUserServerRoleRequestDesc)` to create a new UpdateUserServerRoleRequest.
export const UpdateUserServerRoleRequestDesc: GenDescMessage<UpdateUserServerRoleRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 16);

/**
 * @generated from message buf.alpha.registry.v1alpha1.UpdateUserServerRoleResponse
 */
export type UpdateUserServerRoleResponse = Message<"buf.alpha.registry.v1alpha1.UpdateUserServerRoleResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.UpdateUserServerRoleResponse.
// Use `create(UpdateUserServerRoleResponseDesc)` to create a new UpdateUserServerRoleResponse.
export const UpdateUserServerRoleResponseDesc: GenDescMessage<UpdateUserServerRoleResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 17);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CountUsersRequest
 */
export type CountUsersRequest = Message<"buf.alpha.registry.v1alpha1.CountUsersRequest"> & {
  /**
   * If the user_state_filter is unspecified, all users are included.
   *
   * @generated from field: buf.alpha.registry.v1alpha1.UserState user_state_filter = 1;
   */
  userStateFilter: UserState;
};

// Describes the message buf.alpha.registry.v1alpha1.CountUsersRequest.
// Use `create(CountUsersRequestDesc)` to create a new CountUsersRequest.
export const CountUsersRequestDesc: GenDescMessage<CountUsersRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 18);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CountUsersResponse
 */
export type CountUsersResponse = Message<"buf.alpha.registry.v1alpha1.CountUsersResponse"> & {
  /**
   * @generated from field: uint32 total_count = 1;
   */
  totalCount: number;
};

// Describes the message buf.alpha.registry.v1alpha1.CountUsersResponse.
// Use `create(CountUsersResponseDesc)` to create a new CountUsersResponse.
export const CountUsersResponseDesc: GenDescMessage<CountUsersResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 19);

/**
 * @generated from enum buf.alpha.registry.v1alpha1.UserState
 */
export enum UserState {
  /**
   * @generated from enum value: USER_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: USER_STATE_ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * @generated from enum value: USER_STATE_DEACTIVATED = 2;
   */
  DEACTIVATED = 2,
}

// Describes the enum buf.alpha.registry.v1alpha1.UserState.
export const UserStateDesc: GenDescEnum<UserState> = /*@__PURE__*/
  enumDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 0);

/**
 * UserService is the User service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.UserService
 */
export const UserService: GenDescService<{
  /**
   * CreateUser creates a new user with the given username.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.UserService.CreateUser
   */
  createUser: {
    kind: "unary";
    I: CreateUserRequest;
    O: CreateUserResponse;
  },
  /**
   * GetUser gets a user by ID.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.UserService.GetUser
   */
  getUser: {
    kind: "unary";
    I: GetUserRequest;
    O: GetUserResponse;
  },
  /**
   * GetUserByUsername gets a user by username.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.UserService.GetUserByUsername
   */
  getUserByUsername: {
    kind: "unary";
    I: GetUserByUsernameRequest;
    O: GetUserByUsernameResponse;
  },
  /**
   * ListUsers lists all users.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.UserService.ListUsers
   */
  listUsers: {
    kind: "unary";
    I: ListUsersRequest;
    O: ListUsersResponse;
  },
  /**
   * ListOrganizationUsers lists all users for an organization.
   * TODO: #663 move this to organization service
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.UserService.ListOrganizationUsers
   */
  listOrganizationUsers: {
    kind: "unary";
    I: ListOrganizationUsersRequest;
    O: ListOrganizationUsersResponse;
  },
  /**
   * DeleteUser deletes a user.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.UserService.DeleteUser
   */
  deleteUser: {
    kind: "unary";
    I: DeleteUserRequest;
    O: DeleteUserResponse;
  },
  /**
   * Deactivate user deactivates a user.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.UserService.DeactivateUser
   */
  deactivateUser: {
    kind: "unary";
    I: DeactivateUserRequest;
    O: DeactivateUserResponse;
  },
  /**
   * UpdateUserServerRole update the role of an user in the server.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.UserService.UpdateUserServerRole
   */
  updateUserServerRole: {
    kind: "unary";
    I: UpdateUserServerRoleRequest;
    O: UpdateUserServerRoleResponse;
  },
  /**
   * CountUsers returns the number of users in the server by the user state provided.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.UserService.CountUsers
   */
  countUsers: {
    kind: "unary";
    I: CountUsersRequest;
    O: CountUsersResponse;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_buf_alpha_registry_v1alpha1_user, 0);

