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

import { describe, test } from "@jest/globals";
import type { DescMessage } from "@bufbuild/protobuf";
import { createDescriptorSet } from "@bufbuild/protobuf";
import { UpstreamProtobuf } from "upstream-protobuf";

export function describeGenerated<Desc extends DescMessage>(
  ts: Desc,
  js: Desc,
  fn: (desc: Desc) => void,
) {
  type TestCase = { name: string; desc: Desc };
  describe.each<TestCase>([
    { name: ts.typeName + " (generated ts)", desc: ts },
    { name: js.typeName + " (generated js)", desc: js },
  ])("$name", function (testCase: TestCase) {
    fn(testCase.desc);
  });
}

export function testGenerated<Desc extends DescMessage>(
  ts: Desc,
  js: Desc,
  fn: (desc: Desc) => void,
) {
  type TestCase = { name: string; desc: Desc };
  test.each<TestCase>([
    { name: ts.typeName + " (generated ts)", desc: ts },
    { name: js.typeName + " (generated js)", desc: js },
  ])("$name", function (testCase: TestCase) {
    fn(testCase.desc);
  });
}

export async function compileMessage(proto: string): Promise<DescMessage> {
  const upstream = new UpstreamProtobuf();
  const setBin = await upstream.compileToDescriptorSet(
    {
      "input.proto": proto,
    },
    {
      includeImports: true,
      retainOptions: true,
    },
  );
  const set = createDescriptorSet(setBin);
  const file = set.files.find((f) => f.proto.name === "input.proto");
  if (file === undefined) {
    throw new Error("missing file descriptor for input.proto");
  }
  if (file.messages.length == 0) {
    throw new Error("missing message in input.proto");
  }
  return file.messages[0];
}