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

// @generated by protoc-gen-twirp-es v2.0.0-alpha.1 with parameter "target=ts"
// @generated from file connectrpc/eliza.proto (package connectrpc.eliza.v1, syntax proto3)
/* eslint-disable */

import type { SayRequest, SayResponse } from "./eliza_pb.js";
import { SayRequestDesc, SayResponseDesc } from "./eliza_pb.js";
import type { JsonValue } from "@bufbuild/protobuf";
import { fromJson, toJsonString } from "@bufbuild/protobuf";

/**
 * This is a modified copy of ElizaService from https://buf.build/connectrpc/eliza
 *
 * @generated from service connectrpc.eliza.v1.ElizaService
 */
export class ElizaServiceClient {

    constructor(private readonly baseUrl = "https://demo.connectrpc.com/") {
    }

    /**
     * Say is a unary RPC. Eliza responds to the prompt with a single sentence.
     *
     * @generated from rpc connectrpc.eliza.v1.ElizaService.Say
     */
    async say(request: SayRequest): Promise<SayResponse> {
        const headers = new Headers([]);
        headers.set('content-type', 'application/json');
        const fetchResponse = await fetch(
            `${this.baseUrl}/connectrpc.eliza.v1.ElizaService/Say`,
            {
                method: 'POST',
                headers,
                body: toJsonString(SayRequestDesc, request),
            }
        );
        if (fetchResponse.status !== 200) {
          throw Error(`HTTP ${fetchResponse.status} ${fetchResponse.statusText}`)
        }
        const json = await fetchResponse.json() as JsonValue;
        return fromJson(SayResponseDesc, json);
    }
}
