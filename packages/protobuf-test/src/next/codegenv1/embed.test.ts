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

import { describe, expect, test } from "@jest/globals";
import { compileMessage } from "../helpers.js";
import { embedFileDesc } from "@bufbuild/protobuf/next/codegenv1";

describe("embedFileDesc()", () => {
  test("embeds file descriptor", async () => {
    const { file } = await compileMessage(`
      syntax="proto3";
      message M {
        int32 int32_field = 1;
      }
    `);
    const embedded = embedFileDesc(file);
    expect(embedded).toBeDefined();
    expect(typeof embedded.protoB64().value).toBe("string");
  });
});