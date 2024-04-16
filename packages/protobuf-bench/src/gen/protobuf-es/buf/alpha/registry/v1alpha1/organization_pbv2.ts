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
// @generated from file buf/alpha/registry/v1alpha1/organization.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { GenDescMessage, GenDescService } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { OrganizationRole, PluginRole, RepositoryRole, TemplateRole } from "./role_pbv2.js";
import { fileDesc_buf_alpha_registry_v1alpha1_role } from "./role_pbv2.js";
import type { Timestamp } from "@bufbuild/protobuf/next/wkt";
import { fileDesc_google_protobuf_timestamp } from "@bufbuild/protobuf/next/wkt";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_buf_alpha_registry_v1alpha1_organization: DescFile = /*@__PURE__*/
  fileDesc("Ci5idWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvb3JnYW5pemF0aW9uLnByb3RvEhtidWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEiigEKDE9yZ2FuaXphdGlvbhIKCgJpZBgBIAEoCRIvCgtjcmVhdGVfdGltZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASLwoLdXBkYXRlX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEgwKBG5hbWUYBCABKAkiowEKFk9yZ2FuaXphdGlvbk1lbWJlcnNoaXASPwoMb3JnYW5pemF0aW9uGAEgASgLMikuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLk9yZ2FuaXphdGlvbhJIChFvcmdhbml6YXRpb25fcm9sZRgCIAEoDjItLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5Pcmdhbml6YXRpb25Sb2xlIiQKFkdldE9yZ2FuaXphdGlvblJlcXVlc3QSCgoCaWQYASABKAkiWgoXR2V0T3JnYW5pemF0aW9uUmVzcG9uc2USPwoMb3JnYW5pemF0aW9uGAEgASgLMikuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLk9yZ2FuaXphdGlvbiIsChxHZXRPcmdhbml6YXRpb25CeU5hbWVSZXF1ZXN0EgwKBG5hbWUYASABKAkiYAodR2V0T3JnYW5pemF0aW9uQnlOYW1lUmVzcG9uc2USPwoMb3JnYW5pemF0aW9uGAEgASgLMikuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLk9yZ2FuaXphdGlvbiJSChhMaXN0T3JnYW5pemF0aW9uc1JlcXVlc3QSEQoJcGFnZV9zaXplGAEgASgNEhIKCnBhZ2VfdG9rZW4YAiABKAkSDwoHcmV2ZXJzZRgDIAEoCCJ2ChlMaXN0T3JnYW5pemF0aW9uc1Jlc3BvbnNlEkAKDW9yZ2FuaXphdGlvbnMYASADKAsyKS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuT3JnYW5pemF0aW9uEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCSJnChxMaXN0VXNlck9yZ2FuaXphdGlvbnNSZXF1ZXN0Eg8KB3VzZXJfaWQYASABKAkSEQoJcGFnZV9zaXplGAIgASgNEhIKCnBhZ2VfdG9rZW4YAyABKAkSDwoHcmV2ZXJzZRgEIAEoCCKEAQodTGlzdFVzZXJPcmdhbml6YXRpb25zUmVzcG9uc2USSgoNb3JnYW5pemF0aW9ucxgBIAMoCzIzLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5Pcmdhbml6YXRpb25NZW1iZXJzaGlwEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCSIpChlDcmVhdGVPcmdhbml6YXRpb25SZXF1ZXN0EgwKBG5hbWUYASABKAkiXQoaQ3JlYXRlT3JnYW5pemF0aW9uUmVzcG9uc2USPwoMb3JnYW5pemF0aW9uGAEgASgLMikuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLk9yZ2FuaXphdGlvbiInChlEZWxldGVPcmdhbml6YXRpb25SZXF1ZXN0EgoKAmlkGAEgASgJIhwKGkRlbGV0ZU9yZ2FuaXphdGlvblJlc3BvbnNlIi8KH0RlbGV0ZU9yZ2FuaXphdGlvbkJ5TmFtZVJlcXVlc3QSDAoEbmFtZRgBIAEoCSIiCiBEZWxldGVPcmdhbml6YXRpb25CeU5hbWVSZXNwb25zZSKSAQocQWRkT3JnYW5pemF0aW9uTWVtYmVyUmVxdWVzdBIXCg9vcmdhbml6YXRpb25faWQYASABKAkSDwoHdXNlcl9pZBgCIAEoCRJIChFvcmdhbml6YXRpb25fcm9sZRgDIAEoDjItLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5Pcmdhbml6YXRpb25Sb2xlIh8KHUFkZE9yZ2FuaXphdGlvbk1lbWJlclJlc3BvbnNlIpUBCh9VcGRhdGVPcmdhbml6YXRpb25NZW1iZXJSZXF1ZXN0EhcKD29yZ2FuaXphdGlvbl9pZBgBIAEoCRIPCgd1c2VyX2lkGAIgASgJEkgKEW9yZ2FuaXphdGlvbl9yb2xlGAMgASgOMi0uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLk9yZ2FuaXphdGlvblJvbGUiIgogVXBkYXRlT3JnYW5pemF0aW9uTWVtYmVyUmVzcG9uc2UiSwofUmVtb3ZlT3JnYW5pemF0aW9uTWVtYmVyUmVxdWVzdBIXCg9vcmdhbml6YXRpb25faWQYASABKAkSDwoHdXNlcl9pZBgCIAEoCSIiCiBSZW1vdmVPcmdhbml6YXRpb25NZW1iZXJSZXNwb25zZSKSAQocU2V0T3JnYW5pemF0aW9uTWVtYmVyUmVxdWVzdBIXCg9vcmdhbml6YXRpb25faWQYASABKAkSDwoHdXNlcl9pZBgCIAEoCRJIChFvcmdhbml6YXRpb25fcm9sZRgDIAEoDjItLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5Pcmdhbml6YXRpb25Sb2xlIh8KHVNldE9yZ2FuaXphdGlvbk1lbWJlclJlc3BvbnNlIjkKHkdldE9yZ2FuaXphdGlvblNldHRpbmdzUmVxdWVzdBIXCg9vcmdhbml6YXRpb25faWQYASABKAkijQIKH0dldE9yZ2FuaXphdGlvblNldHRpbmdzUmVzcG9uc2USSQoUcmVwb3NpdG9yeV9iYXNlX3JvbGUYASABKA4yKy5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuUmVwb3NpdG9yeVJvbGUSQQoQcGx1Z2luX2Jhc2Vfcm9sZRgCIAEoDjInLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5QbHVnaW5Sb2xlEkUKEnRlbXBsYXRlX2Jhc2Vfcm9sZRgDIAEoDjIpLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5UZW1wbGF0ZVJvbGUSFQoNbWVtYmVyc19jb3VudBgEIAEoDSKRAgohVXBkYXRlT3JnYW5pemF0aW9uU2V0dGluZ3NSZXF1ZXN0EhcKD29yZ2FuaXphdGlvbl9pZBgBIAEoCRJJChRyZXBvc2l0b3J5X2Jhc2Vfcm9sZRgCIAEoDjIrLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5SZXBvc2l0b3J5Um9sZRJBChBwbHVnaW5fYmFzZV9yb2xlGAMgASgOMicuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlBsdWdpblJvbGUSRQoSdGVtcGxhdGVfYmFzZV9yb2xlGAQgASgOMikuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlRlbXBsYXRlUm9sZSIkCiJVcGRhdGVPcmdhbml6YXRpb25TZXR0aW5nc1Jlc3BvbnNlMvEOChNPcmdhbml6YXRpb25TZXJ2aWNlEnwKD0dldE9yZ2FuaXphdGlvbhIzLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5HZXRPcmdhbml6YXRpb25SZXF1ZXN0GjQuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkdldE9yZ2FuaXphdGlvblJlc3BvbnNlEo4BChVHZXRPcmdhbml6YXRpb25CeU5hbWUSOS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuR2V0T3JnYW5pemF0aW9uQnlOYW1lUmVxdWVzdBo6LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5HZXRPcmdhbml6YXRpb25CeU5hbWVSZXNwb25zZRKCAQoRTGlzdE9yZ2FuaXphdGlvbnMSNS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuTGlzdE9yZ2FuaXphdGlvbnNSZXF1ZXN0GjYuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkxpc3RPcmdhbml6YXRpb25zUmVzcG9uc2USjgEKFUxpc3RVc2VyT3JnYW5pemF0aW9ucxI5LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5MaXN0VXNlck9yZ2FuaXphdGlvbnNSZXF1ZXN0GjouYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkxpc3RVc2VyT3JnYW5pemF0aW9uc1Jlc3BvbnNlEoUBChJDcmVhdGVPcmdhbml6YXRpb24SNi5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuQ3JlYXRlT3JnYW5pemF0aW9uUmVxdWVzdBo3LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5DcmVhdGVPcmdhbml6YXRpb25SZXNwb25zZRKFAQoSRGVsZXRlT3JnYW5pemF0aW9uEjYuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkRlbGV0ZU9yZ2FuaXphdGlvblJlcXVlc3QaNy5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuRGVsZXRlT3JnYW5pemF0aW9uUmVzcG9uc2USlwEKGERlbGV0ZU9yZ2FuaXphdGlvbkJ5TmFtZRI8LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5EZWxldGVPcmdhbml6YXRpb25CeU5hbWVSZXF1ZXN0Gj0uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkRlbGV0ZU9yZ2FuaXphdGlvbkJ5TmFtZVJlc3BvbnNlEo4BChVBZGRPcmdhbml6YXRpb25NZW1iZXISOS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuQWRkT3JnYW5pemF0aW9uTWVtYmVyUmVxdWVzdBo6LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5BZGRPcmdhbml6YXRpb25NZW1iZXJSZXNwb25zZRKXAQoYVXBkYXRlT3JnYW5pemF0aW9uTWVtYmVyEjwuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlVwZGF0ZU9yZ2FuaXphdGlvbk1lbWJlclJlcXVlc3QaPS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuVXBkYXRlT3JnYW5pemF0aW9uTWVtYmVyUmVzcG9uc2USlwEKGFJlbW92ZU9yZ2FuaXphdGlvbk1lbWJlchI8LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5SZW1vdmVPcmdhbml6YXRpb25NZW1iZXJSZXF1ZXN0Gj0uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlJlbW92ZU9yZ2FuaXphdGlvbk1lbWJlclJlc3BvbnNlEo4BChVTZXRPcmdhbml6YXRpb25NZW1iZXISOS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuU2V0T3JnYW5pemF0aW9uTWVtYmVyUmVxdWVzdBo6LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5TZXRPcmdhbml6YXRpb25NZW1iZXJSZXNwb25zZRKUAQoXR2V0T3JnYW5pemF0aW9uU2V0dGluZ3MSOy5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuR2V0T3JnYW5pemF0aW9uU2V0dGluZ3NSZXF1ZXN0GjwuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkdldE9yZ2FuaXphdGlvblNldHRpbmdzUmVzcG9uc2USnQEKGlVwZGF0ZU9yZ2FuaXphdGlvblNldHRpbmdzEj4uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlVwZGF0ZU9yZ2FuaXphdGlvblNldHRpbmdzUmVxdWVzdBo/LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5VcGRhdGVPcmdhbml6YXRpb25TZXR0aW5nc1Jlc3BvbnNlYgZwcm90bzM", [fileDesc_buf_alpha_registry_v1alpha1_role, fileDesc_google_protobuf_timestamp]);

/**
 * @generated from message buf.alpha.registry.v1alpha1.Organization
 */
export type Organization = Message<"buf.alpha.registry.v1alpha1.Organization"> & {
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
   * @generated from field: string name = 4;
   */
  name: string;
};

// Describes the message buf.alpha.registry.v1alpha1.Organization.
// Use `create(OrganizationDesc)` to create a new Organization.
export const OrganizationDesc: GenDescMessage<Organization> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 0);

/**
 * OrganizationMembership is a nested structure that contains
 * the organization and user membership information on that organization.
 *
 * @generated from message buf.alpha.registry.v1alpha1.OrganizationMembership
 */
export type OrganizationMembership = Message<"buf.alpha.registry.v1alpha1.OrganizationMembership"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.Organization organization = 1;
   */
  organization?: Organization;

  /**
   * @generated from field: buf.alpha.registry.v1alpha1.OrganizationRole organization_role = 2;
   */
  organizationRole: OrganizationRole;
};

// Describes the message buf.alpha.registry.v1alpha1.OrganizationMembership.
// Use `create(OrganizationMembershipDesc)` to create a new OrganizationMembership.
export const OrganizationMembershipDesc: GenDescMessage<OrganizationMembership> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 1);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetOrganizationRequest
 */
export type GetOrganizationRequest = Message<"buf.alpha.registry.v1alpha1.GetOrganizationRequest"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;
};

// Describes the message buf.alpha.registry.v1alpha1.GetOrganizationRequest.
// Use `create(GetOrganizationRequestDesc)` to create a new GetOrganizationRequest.
export const GetOrganizationRequestDesc: GenDescMessage<GetOrganizationRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 2);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetOrganizationResponse
 */
export type GetOrganizationResponse = Message<"buf.alpha.registry.v1alpha1.GetOrganizationResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.Organization organization = 1;
   */
  organization?: Organization;
};

// Describes the message buf.alpha.registry.v1alpha1.GetOrganizationResponse.
// Use `create(GetOrganizationResponseDesc)` to create a new GetOrganizationResponse.
export const GetOrganizationResponseDesc: GenDescMessage<GetOrganizationResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 3);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetOrganizationByNameRequest
 */
export type GetOrganizationByNameRequest = Message<"buf.alpha.registry.v1alpha1.GetOrganizationByNameRequest"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;
};

// Describes the message buf.alpha.registry.v1alpha1.GetOrganizationByNameRequest.
// Use `create(GetOrganizationByNameRequestDesc)` to create a new GetOrganizationByNameRequest.
export const GetOrganizationByNameRequestDesc: GenDescMessage<GetOrganizationByNameRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 4);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetOrganizationByNameResponse
 */
export type GetOrganizationByNameResponse = Message<"buf.alpha.registry.v1alpha1.GetOrganizationByNameResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.Organization organization = 1;
   */
  organization?: Organization;
};

// Describes the message buf.alpha.registry.v1alpha1.GetOrganizationByNameResponse.
// Use `create(GetOrganizationByNameResponseDesc)` to create a new GetOrganizationByNameResponse.
export const GetOrganizationByNameResponseDesc: GenDescMessage<GetOrganizationByNameResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 5);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListOrganizationsRequest
 */
export type ListOrganizationsRequest = Message<"buf.alpha.registry.v1alpha1.ListOrganizationsRequest"> & {
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
};

// Describes the message buf.alpha.registry.v1alpha1.ListOrganizationsRequest.
// Use `create(ListOrganizationsRequestDesc)` to create a new ListOrganizationsRequest.
export const ListOrganizationsRequestDesc: GenDescMessage<ListOrganizationsRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 6);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListOrganizationsResponse
 */
export type ListOrganizationsResponse = Message<"buf.alpha.registry.v1alpha1.ListOrganizationsResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.Organization organizations = 1;
   */
  organizations: Organization[];

  /**
   * There are no more pages if this is empty.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

// Describes the message buf.alpha.registry.v1alpha1.ListOrganizationsResponse.
// Use `create(ListOrganizationsResponseDesc)` to create a new ListOrganizationsResponse.
export const ListOrganizationsResponseDesc: GenDescMessage<ListOrganizationsResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 7);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListUserOrganizationsRequest
 */
export type ListUserOrganizationsRequest = Message<"buf.alpha.registry.v1alpha1.ListUserOrganizationsRequest"> & {
  /**
   * The ID of the user whose organizations should be listed.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

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

// Describes the message buf.alpha.registry.v1alpha1.ListUserOrganizationsRequest.
// Use `create(ListUserOrganizationsRequestDesc)` to create a new ListUserOrganizationsRequest.
export const ListUserOrganizationsRequestDesc: GenDescMessage<ListUserOrganizationsRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 8);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListUserOrganizationsResponse
 */
export type ListUserOrganizationsResponse = Message<"buf.alpha.registry.v1alpha1.ListUserOrganizationsResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.OrganizationMembership organizations = 1;
   */
  organizations: OrganizationMembership[];

  /**
   * There are no more pages if this is empty.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

// Describes the message buf.alpha.registry.v1alpha1.ListUserOrganizationsResponse.
// Use `create(ListUserOrganizationsResponseDesc)` to create a new ListUserOrganizationsResponse.
export const ListUserOrganizationsResponseDesc: GenDescMessage<ListUserOrganizationsResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 9);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateOrganizationRequest
 */
export type CreateOrganizationRequest = Message<"buf.alpha.registry.v1alpha1.CreateOrganizationRequest"> & {
  /**
   * Must be unique across organizations.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

// Describes the message buf.alpha.registry.v1alpha1.CreateOrganizationRequest.
// Use `create(CreateOrganizationRequestDesc)` to create a new CreateOrganizationRequest.
export const CreateOrganizationRequestDesc: GenDescMessage<CreateOrganizationRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 10);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateOrganizationResponse
 */
export type CreateOrganizationResponse = Message<"buf.alpha.registry.v1alpha1.CreateOrganizationResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.Organization organization = 1;
   */
  organization?: Organization;
};

// Describes the message buf.alpha.registry.v1alpha1.CreateOrganizationResponse.
// Use `create(CreateOrganizationResponseDesc)` to create a new CreateOrganizationResponse.
export const CreateOrganizationResponseDesc: GenDescMessage<CreateOrganizationResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 11);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteOrganizationRequest
 */
export type DeleteOrganizationRequest = Message<"buf.alpha.registry.v1alpha1.DeleteOrganizationRequest"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;
};

// Describes the message buf.alpha.registry.v1alpha1.DeleteOrganizationRequest.
// Use `create(DeleteOrganizationRequestDesc)` to create a new DeleteOrganizationRequest.
export const DeleteOrganizationRequestDesc: GenDescMessage<DeleteOrganizationRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 12);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteOrganizationResponse
 */
export type DeleteOrganizationResponse = Message<"buf.alpha.registry.v1alpha1.DeleteOrganizationResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.DeleteOrganizationResponse.
// Use `create(DeleteOrganizationResponseDesc)` to create a new DeleteOrganizationResponse.
export const DeleteOrganizationResponseDesc: GenDescMessage<DeleteOrganizationResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 13);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteOrganizationByNameRequest
 */
export type DeleteOrganizationByNameRequest = Message<"buf.alpha.registry.v1alpha1.DeleteOrganizationByNameRequest"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;
};

// Describes the message buf.alpha.registry.v1alpha1.DeleteOrganizationByNameRequest.
// Use `create(DeleteOrganizationByNameRequestDesc)` to create a new DeleteOrganizationByNameRequest.
export const DeleteOrganizationByNameRequestDesc: GenDescMessage<DeleteOrganizationByNameRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 14);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteOrganizationByNameResponse
 */
export type DeleteOrganizationByNameResponse = Message<"buf.alpha.registry.v1alpha1.DeleteOrganizationByNameResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.DeleteOrganizationByNameResponse.
// Use `create(DeleteOrganizationByNameResponseDesc)` to create a new DeleteOrganizationByNameResponse.
export const DeleteOrganizationByNameResponseDesc: GenDescMessage<DeleteOrganizationByNameResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 15);

/**
 * @generated from message buf.alpha.registry.v1alpha1.AddOrganizationMemberRequest
 */
export type AddOrganizationMemberRequest = Message<"buf.alpha.registry.v1alpha1.AddOrganizationMemberRequest"> & {
  /**
   * The ID of the organization for which the user will be added to.
   *
   * @generated from field: string organization_id = 1;
   */
  organizationId: string;

  /**
   * The ID of the user for which to be added to the organization.
   *
   * @generated from field: string user_id = 2;
   */
  userId: string;

  /**
   * The new role of the user in the organization.
   *
   * @generated from field: buf.alpha.registry.v1alpha1.OrganizationRole organization_role = 3;
   */
  organizationRole: OrganizationRole;
};

// Describes the message buf.alpha.registry.v1alpha1.AddOrganizationMemberRequest.
// Use `create(AddOrganizationMemberRequestDesc)` to create a new AddOrganizationMemberRequest.
export const AddOrganizationMemberRequestDesc: GenDescMessage<AddOrganizationMemberRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 16);

/**
 * @generated from message buf.alpha.registry.v1alpha1.AddOrganizationMemberResponse
 */
export type AddOrganizationMemberResponse = Message<"buf.alpha.registry.v1alpha1.AddOrganizationMemberResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.AddOrganizationMemberResponse.
// Use `create(AddOrganizationMemberResponseDesc)` to create a new AddOrganizationMemberResponse.
export const AddOrganizationMemberResponseDesc: GenDescMessage<AddOrganizationMemberResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 17);

/**
 * @generated from message buf.alpha.registry.v1alpha1.UpdateOrganizationMemberRequest
 */
export type UpdateOrganizationMemberRequest = Message<"buf.alpha.registry.v1alpha1.UpdateOrganizationMemberRequest"> & {
  /**
   * The ID of the organization for which the member belongs to.
   *
   * @generated from field: string organization_id = 1;
   */
  organizationId: string;

  /**
   * The ID of the user for which to be updated the role.
   *
   * @generated from field: string user_id = 2;
   */
  userId: string;

  /**
   * The new role of the user in the organization.
   *
   * @generated from field: buf.alpha.registry.v1alpha1.OrganizationRole organization_role = 3;
   */
  organizationRole: OrganizationRole;
};

// Describes the message buf.alpha.registry.v1alpha1.UpdateOrganizationMemberRequest.
// Use `create(UpdateOrganizationMemberRequestDesc)` to create a new UpdateOrganizationMemberRequest.
export const UpdateOrganizationMemberRequestDesc: GenDescMessage<UpdateOrganizationMemberRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 18);

/**
 * @generated from message buf.alpha.registry.v1alpha1.UpdateOrganizationMemberResponse
 */
export type UpdateOrganizationMemberResponse = Message<"buf.alpha.registry.v1alpha1.UpdateOrganizationMemberResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.UpdateOrganizationMemberResponse.
// Use `create(UpdateOrganizationMemberResponseDesc)` to create a new UpdateOrganizationMemberResponse.
export const UpdateOrganizationMemberResponseDesc: GenDescMessage<UpdateOrganizationMemberResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 19);

/**
 * @generated from message buf.alpha.registry.v1alpha1.RemoveOrganizationMemberRequest
 */
export type RemoveOrganizationMemberRequest = Message<"buf.alpha.registry.v1alpha1.RemoveOrganizationMemberRequest"> & {
  /**
   * The ID of the organization for which the member belongs to.
   *
   * @generated from field: string organization_id = 1;
   */
  organizationId: string;

  /**
   * The ID of the user for which to be removed the role.
   *
   * @generated from field: string user_id = 2;
   */
  userId: string;
};

// Describes the message buf.alpha.registry.v1alpha1.RemoveOrganizationMemberRequest.
// Use `create(RemoveOrganizationMemberRequestDesc)` to create a new RemoveOrganizationMemberRequest.
export const RemoveOrganizationMemberRequestDesc: GenDescMessage<RemoveOrganizationMemberRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 20);

/**
 * @generated from message buf.alpha.registry.v1alpha1.RemoveOrganizationMemberResponse
 */
export type RemoveOrganizationMemberResponse = Message<"buf.alpha.registry.v1alpha1.RemoveOrganizationMemberResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.RemoveOrganizationMemberResponse.
// Use `create(RemoveOrganizationMemberResponseDesc)` to create a new RemoveOrganizationMemberResponse.
export const RemoveOrganizationMemberResponseDesc: GenDescMessage<RemoveOrganizationMemberResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 21);

/**
 * @generated from message buf.alpha.registry.v1alpha1.SetOrganizationMemberRequest
 */
export type SetOrganizationMemberRequest = Message<"buf.alpha.registry.v1alpha1.SetOrganizationMemberRequest"> & {
  /**
   * The ID of the organization for which the user's role will be set.
   *
   * @generated from field: string organization_id = 1;
   */
  organizationId: string;

  /**
   * The ID of the user whose role will be set.
   *
   * @generated from field: string user_id = 2;
   */
  userId: string;

  /**
   * The role to assign to the user.
   * Setting UNSPECIFIED means removing the user's role.
   *
   * @generated from field: buf.alpha.registry.v1alpha1.OrganizationRole organization_role = 3;
   */
  organizationRole: OrganizationRole;
};

// Describes the message buf.alpha.registry.v1alpha1.SetOrganizationMemberRequest.
// Use `create(SetOrganizationMemberRequestDesc)` to create a new SetOrganizationMemberRequest.
export const SetOrganizationMemberRequestDesc: GenDescMessage<SetOrganizationMemberRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 22);

/**
 * @generated from message buf.alpha.registry.v1alpha1.SetOrganizationMemberResponse
 */
export type SetOrganizationMemberResponse = Message<"buf.alpha.registry.v1alpha1.SetOrganizationMemberResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.SetOrganizationMemberResponse.
// Use `create(SetOrganizationMemberResponseDesc)` to create a new SetOrganizationMemberResponse.
export const SetOrganizationMemberResponseDesc: GenDescMessage<SetOrganizationMemberResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 23);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetOrganizationSettingsRequest
 */
export type GetOrganizationSettingsRequest = Message<"buf.alpha.registry.v1alpha1.GetOrganizationSettingsRequest"> & {
  /**
   * The ID of the organization for which to get the settings.
   *
   * @generated from field: string organization_id = 1;
   */
  organizationId: string;
};

// Describes the message buf.alpha.registry.v1alpha1.GetOrganizationSettingsRequest.
// Use `create(GetOrganizationSettingsRequestDesc)` to create a new GetOrganizationSettingsRequest.
export const GetOrganizationSettingsRequestDesc: GenDescMessage<GetOrganizationSettingsRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 24);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetOrganizationSettingsResponse
 */
export type GetOrganizationSettingsResponse = Message<"buf.alpha.registry.v1alpha1.GetOrganizationSettingsResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.RepositoryRole repository_base_role = 1;
   */
  repositoryBaseRole: RepositoryRole;

  /**
   * @generated from field: buf.alpha.registry.v1alpha1.PluginRole plugin_base_role = 2;
   */
  pluginBaseRole: PluginRole;

  /**
   * @generated from field: buf.alpha.registry.v1alpha1.TemplateRole template_base_role = 3;
   */
  templateBaseRole: TemplateRole;

  /**
   * The number of members in the organization.
   *
   * @generated from field: uint32 members_count = 4;
   */
  membersCount: number;
};

// Describes the message buf.alpha.registry.v1alpha1.GetOrganizationSettingsResponse.
// Use `create(GetOrganizationSettingsResponseDesc)` to create a new GetOrganizationSettingsResponse.
export const GetOrganizationSettingsResponseDesc: GenDescMessage<GetOrganizationSettingsResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 25);

/**
 * @generated from message buf.alpha.registry.v1alpha1.UpdateOrganizationSettingsRequest
 */
export type UpdateOrganizationSettingsRequest = Message<"buf.alpha.registry.v1alpha1.UpdateOrganizationSettingsRequest"> & {
  /**
   * The ID of the organization for which to update the base roles.
   *
   * @generated from field: string organization_id = 1;
   */
  organizationId: string;

  /**
   * optional, no update to this base role will be made if this is unspecified.
   *
   * @generated from field: buf.alpha.registry.v1alpha1.RepositoryRole repository_base_role = 2;
   */
  repositoryBaseRole: RepositoryRole;

  /**
   * optional, no update to this base role will be made if this is unspecified.
   *
   * @generated from field: buf.alpha.registry.v1alpha1.PluginRole plugin_base_role = 3;
   */
  pluginBaseRole: PluginRole;

  /**
   * optional, no update to this base role will be made if this is unspecified.
   *
   * @generated from field: buf.alpha.registry.v1alpha1.TemplateRole template_base_role = 4;
   */
  templateBaseRole: TemplateRole;
};

// Describes the message buf.alpha.registry.v1alpha1.UpdateOrganizationSettingsRequest.
// Use `create(UpdateOrganizationSettingsRequestDesc)` to create a new UpdateOrganizationSettingsRequest.
export const UpdateOrganizationSettingsRequestDesc: GenDescMessage<UpdateOrganizationSettingsRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 26);

/**
 * @generated from message buf.alpha.registry.v1alpha1.UpdateOrganizationSettingsResponse
 */
export type UpdateOrganizationSettingsResponse = Message<"buf.alpha.registry.v1alpha1.UpdateOrganizationSettingsResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.UpdateOrganizationSettingsResponse.
// Use `create(UpdateOrganizationSettingsResponseDesc)` to create a new UpdateOrganizationSettingsResponse.
export const UpdateOrganizationSettingsResponseDesc: GenDescMessage<UpdateOrganizationSettingsResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 27);

/**
 * OrganizationService is the Organization service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.OrganizationService
 */
export const OrganizationService: GenDescService<{
  /**
   * GetOrganization gets a organization by ID.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.GetOrganization
   */
  getOrganization: {
    kind: "unary";
    I: GetOrganizationRequest;
    O: GetOrganizationResponse;
  },
  /**
   * GetOrganizationByName gets a organization by name.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.GetOrganizationByName
   */
  getOrganizationByName: {
    kind: "unary";
    I: GetOrganizationByNameRequest;
    O: GetOrganizationByNameResponse;
  },
  /**
   * ListOrganizations lists all organizations.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.ListOrganizations
   */
  listOrganizations: {
    kind: "unary";
    I: ListOrganizationsRequest;
    O: ListOrganizationsResponse;
  },
  /**
   * ListUserOrganizations lists all organizations a user is member of.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.ListUserOrganizations
   */
  listUserOrganizations: {
    kind: "unary";
    I: ListUserOrganizationsRequest;
    O: ListUserOrganizationsResponse;
  },
  /**
   * CreateOrganization creates a new organization.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.CreateOrganization
   */
  createOrganization: {
    kind: "unary";
    I: CreateOrganizationRequest;
    O: CreateOrganizationResponse;
  },
  /**
   * DeleteOrganization deletes a organization.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.DeleteOrganization
   */
  deleteOrganization: {
    kind: "unary";
    I: DeleteOrganizationRequest;
    O: DeleteOrganizationResponse;
  },
  /**
   * DeleteOrganizationByName deletes a organization by name.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.DeleteOrganizationByName
   */
  deleteOrganizationByName: {
    kind: "unary";
    I: DeleteOrganizationByNameRequest;
    O: DeleteOrganizationByNameResponse;
  },
  /**
   * AddOrganizationMember add a role to an user in the organization.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.AddOrganizationMember
   */
  addOrganizationMember: {
    kind: "unary";
    I: AddOrganizationMemberRequest;
    O: AddOrganizationMemberResponse;
  },
  /**
   * UpdateOrganizationMember update the user's membership information in the organization.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.UpdateOrganizationMember
   */
  updateOrganizationMember: {
    kind: "unary";
    I: UpdateOrganizationMemberRequest;
    O: UpdateOrganizationMemberResponse;
  },
  /**
   * RemoveOrganizationMember remove the role of an user in the organization.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.RemoveOrganizationMember
   */
  removeOrganizationMember: {
    kind: "unary";
    I: RemoveOrganizationMemberRequest;
    O: RemoveOrganizationMemberResponse;
  },
  /**
   * SetOrganizationMember sets the role of a user in the organization.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.SetOrganizationMember
   */
  setOrganizationMember: {
    kind: "unary";
    I: SetOrganizationMemberRequest;
    O: SetOrganizationMemberResponse;
  },
  /**
   * GetOrganizationSettings gets the settings of an organization, including organization base roles.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.GetOrganizationSettings
   */
  getOrganizationSettings: {
    kind: "unary";
    I: GetOrganizationSettingsRequest;
    O: GetOrganizationSettingsResponse;
  },
  /**
   * UpdateOrganizationSettings update the organization settings including base roles.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.UpdateOrganizationSettings
   */
  updateOrganizationSettings: {
    kind: "unary";
    I: UpdateOrganizationSettingsRequest;
    O: UpdateOrganizationSettingsResponse;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_buf_alpha_registry_v1alpha1_organization, 0);

