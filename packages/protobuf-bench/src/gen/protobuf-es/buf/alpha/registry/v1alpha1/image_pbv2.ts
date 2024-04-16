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
// @generated from file buf/alpha/registry/v1alpha1/image.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { GenDescEnum, GenDescMessage, GenDescService } from "@bufbuild/protobuf/next/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Image } from "../../image/v1/image_pbv2.js";
import { fileDesc_buf_alpha_image_v1_image } from "../../image/v1/image_pbv2.js";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_buf_alpha_registry_v1alpha1_image: DescFile = /*@__PURE__*/
  fileDesc("CididWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvaW1hZ2UucHJvdG8SG2J1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMSLKAQoPR2V0SW1hZ2VSZXF1ZXN0Eg0KBW93bmVyGAEgASgJEhIKCnJlcG9zaXRvcnkYAiABKAkSEQoJcmVmZXJlbmNlGAMgASgJEhcKD2V4Y2x1ZGVfaW1wb3J0cxgEIAEoCBIbChNleGNsdWRlX3NvdXJjZV9pbmZvGAUgASgIEg0KBXR5cGVzGAYgAygJEjwKDGluY2x1ZGVfbWFzaxgHIAMoDjImLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5JbWFnZU1hc2siPAoQR2V0SW1hZ2VSZXNwb25zZRIoCgVpbWFnZRgBIAEoCzIZLmJ1Zi5hbHBoYS5pbWFnZS52MS5JbWFnZSpvCglJbWFnZU1hc2sSGgoWSU1BR0VfTUFTS19VTlNQRUNJRklFRBAAEhcKE0lNQUdFX01BU0tfTUVTU0FHRVMQARIUChBJTUFHRV9NQVNLX0VOVU1TEAISFwoTSU1BR0VfTUFTS19TRVJWSUNFUxADMncKDEltYWdlU2VydmljZRJnCghHZXRJbWFnZRIsLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5HZXRJbWFnZVJlcXVlc3QaLS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuR2V0SW1hZ2VSZXNwb25zZWIGcHJvdG8z", [fileDesc_buf_alpha_image_v1_image]);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetImageRequest
 */
export type GetImageRequest = Message<"buf.alpha.registry.v1alpha1.GetImageRequest"> & {
  /**
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * @generated from field: string repository = 2;
   */
  repository: string;

  /**
   * @generated from field: string reference = 3;
   */
  reference: string;

  /**
   * Exclude files from imported buf modules in this image.
   *
   * @generated from field: bool exclude_imports = 4;
   */
  excludeImports: boolean;

  /**
   * Exclude source_code_info fields from each ImageFile.
   *
   * @generated from field: bool exclude_source_info = 5;
   */
  excludeSourceInfo: boolean;

  /**
   * When specified the returned image will only contain the necessary files and
   * descriptors in those files to describe these types. Accepts messages, enums
   * and services. All types must be defined in the buf module, types in
   * dependencies are not accepted.
   *
   * At this time specifying `types` requires `exclude_source_info` to be set to
   * true. 
   *
   * @generated from field: repeated string types = 6;
   */
  types: string[];

  /**
   * When not empty, the returned image's files will only include
   * *DescriptorProto fields for the elements specified here. The masks are
   * applied without regard for dependenices between types. For example, if
   * `IMAGE_MASK_MESSAGES` is specified without `IMAGE_MASK_ENUMS` the resulting
   * image will NOT contain enum definitions even if they are referenced from
   * message fields.
   *
   * @generated from field: repeated buf.alpha.registry.v1alpha1.ImageMask include_mask = 7;
   */
  includeMask: ImageMask[];
};

// Describes the message buf.alpha.registry.v1alpha1.GetImageRequest.
// Use `create(GetImageRequestDesc)` to create a new GetImageRequest.
export const GetImageRequestDesc: GenDescMessage<GetImageRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_image, 0);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetImageResponse
 */
export type GetImageResponse = Message<"buf.alpha.registry.v1alpha1.GetImageResponse"> & {
  /**
   * @generated from field: buf.alpha.image.v1.Image image = 1;
   */
  image?: Image;
};

// Describes the message buf.alpha.registry.v1alpha1.GetImageResponse.
// Use `create(GetImageResponseDesc)` to create a new GetImageResponse.
export const GetImageResponseDesc: GenDescMessage<GetImageResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_image, 1);

/**
 * ImageMask is used in GetImageRequest to specify which parts of an image 
 * should be masked in responses.
 *
 * @generated from enum buf.alpha.registry.v1alpha1.ImageMask
 */
export enum ImageMask {
  /**
   * @generated from enum value: IMAGE_MASK_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * IMAGE_MASK_MESSAGES refers to ImageFile's `google.protobuf.DescriptorProto
   * message_type` field.
   *
   * @generated from enum value: IMAGE_MASK_MESSAGES = 1;
   */
  MESSAGES = 1,

  /**
   * IMAGE_MASK_ENUMS refers to ImageFile's `google.protobuf.EnumDescriptorProto
   * enum_type` field.
   *
   * @generated from enum value: IMAGE_MASK_ENUMS = 2;
   */
  ENUMS = 2,

  /**
   * IMAGE_MASK_SERVICES refers to ImageFile's
   * `google.protobuf.ServiceDescriptorProto service` field.
   *
   * @generated from enum value: IMAGE_MASK_SERVICES = 3;
   */
  SERVICES = 3,
}

// Describes the enum buf.alpha.registry.v1alpha1.ImageMask.
export const ImageMaskDesc: GenDescEnum<ImageMask> = /*@__PURE__*/
  enumDesc(fileDesc_buf_alpha_registry_v1alpha1_image, 0);

/**
 * ImageService serves compiled images.
 *
 * @generated from service buf.alpha.registry.v1alpha1.ImageService
 */
export const ImageService: GenDescService<{
  /**
   * GetImage serves a compiled image for the local module. It automatically
   * downloads dependencies if necessary.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.ImageService.GetImage
   */
  getImage: {
    kind: "unary";
    I: GetImageRequest;
    O: GetImageResponse;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_buf_alpha_registry_v1alpha1_image, 0);

