// Copyright 2021-2022 Buf Technologies, Inc.
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

// NOTE: This benchmark partly compares apples and oranges in that it measures protocol buffers,
// which is purely a binary format, and JSON, which is purely a string format.
//
// This matters because strings aren't actually transfered over the network but must still be
// converted to binary somewhere down the road. Because this can't be measured reliably, this
// benchmark compares both pure string performance of JSON and additional binary conversion of the
// same data using node buffers. Actual JSON performance on the network level should be somewhere
// in between.

import { newSuite } from "./suite.js";
import protobuf from "protobufjs";
import { Test as ProtobufES_Test } from "./gen/protobuf-es/data/bench_pb.js";
import protobufJsUtf8 from "@protobufjs/utf8";
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf";

const ProtobufJS_Test = protobuf
  .loadSync("./data/bench.proto")
  .resolveAll()
  .lookup("Test");

const testMessageCanonicalJson = {
  string: "Lorem ipsum dolor sit amet.",
  uint32: 9000,
  inner: {
    int32: 20161110,
    innerInner: {
      longField: "649545084044315",
      enum: 1,
      sint32: -42,
    },
  },
  float: 0.25,
};
const testMessageProtobufES = ProtobufES_Test.fromJson(testMessageCanonicalJson);
const testMessageProtobufJS = ProtobufJS_Test.fromObject(testMessageCanonicalJson);
const testMessageBinary = testMessageProtobufES.toBinary();

const utf8 = {
  decode(input) {
    return protobufJsUtf8.read(input, 0, input.length);
  },
  encode(input) {
    const b = new Uint8Array(protobufJsUtf8.length(input));
    protobufJsUtf8.write(input, b, 0);
    return b;
  }
};
const pbESQuickBinaryOptions = {
  readUnknownFields: false,
  readerFactory: (bytes) => new BinaryReader(bytes, utf8),
  writerFactory: () => new BinaryWriter(utf8),
};

newSuite("encoding (binary)")
  .add("protobuf.js", function () {
    ProtobufJS_Test.encode(testMessageProtobufJS).finish();
  })
  .add("protobuf-es", function () {
    testMessageProtobufES.toBinary();
  })
  .add("protobuf-es Q", function () {
    testMessageProtobufES.toBinary(pbESQuickBinaryOptions);
  })
  .run();

newSuite("encoding empty object (binary)")
  .add("protobuf.js", function () {
    ProtobufJS_Test.encode(ProtobufJS_Test.create()).finish();
  })
  .add("protobuf-es", function () {
    new ProtobufES_Test().toBinary();
  })
  .run();

newSuite("encoding (json)")
  .add("protobuf.js", function () {
    ProtobufJS_Test.toObject(testMessageProtobufJS);
  })
  .add("protobuf-es", function () {
    testMessageProtobufES.toJson();
  })
  .run();

newSuite("encoding empty object (json)")
  .add("protobuf.js", function () {
    ProtobufJS_Test.toObject(ProtobufJS_Test.create());
  })
  .add("protobuf-es", function () {
    new ProtobufES_Test().toJson();
  })
  .run();

newSuite("decoding (binary)")
  .add("protobuf.js", function () {
    ProtobufJS_Test.decode(testMessageBinary);
  })
  .add("protobuf-es", function () {
    ProtobufES_Test.fromBinary(testMessageBinary);
  })
  .add("protobuf-es Q", function () {
    ProtobufES_Test.fromBinary(testMessageBinary, pbESQuickBinaryOptions);
  })
  .run();

newSuite("decoding (json)")
  .add("protobuf.js", function () {
    ProtobufJS_Test.fromObject(testMessageCanonicalJson);
  })
  .add("protobuf-es", function () {
    ProtobufES_Test.fromJson(testMessageCanonicalJson);
  })
  .run();

newSuite("roundtrip")
  .add("protobuf.js", function () {
    ProtobufJS_Test.decode(ProtobufJS_Test.encode(testMessageProtobufJS).finish());
  })
  .add("protobuf-es", function () {
    ProtobufES_Test.fromBinary(testMessageProtobufES.toBinary());
  })
  .add("protobuf-es Q", function () {
    ProtobufES_Test.fromBinary(testMessageProtobufES.toBinary(pbESQuickBinaryOptions), pbESQuickBinaryOptions);
  })
  .run();
