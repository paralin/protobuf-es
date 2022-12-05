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
import { jsonData } from "./data/bench.js";

const ProtobufJS_Test = protobuf
  .loadSync("./data/bench.proto")
  .resolveAll()
  .lookup("Test");
// TODO
//
// 1.  The entire encoding suite is inside the protobufjs callback.  prob should only be done for protobufjs, but it
// may not be a huge deal
// 2.  the equivalent to protobuf-es would be the static class, but even so, doing it with root.lookup would be a
// hindrance to protobufjs as it first has to look up and compile the file (but maybe not since we look it up prior
// to the suite being run

const Buffer_from =
  (Buffer.from !== Uint8Array.from && Buffer.from) ||
  function (value, encoding) {
    return new Buffer(value, encoding);
  };

// const jsonBuf = Buffer_from(jsonStr, "utf8");
const pbjsBuf = ProtobufJS_Test.encode(jsonData).finish();
const pbjsMsg = ProtobufJS_Test.decode(pbjsBuf);

// Get a buffer ready from protobuf-es
const pbESMsg = ProtobufES_Test.fromJson(jsonData);
const pbESBuf = pbESMsg.toBinary();

newSuite("encoding (binary)")
  .add("protobuf.js", function () {
    ProtobufJS_Test.encode(jsonData).finish();
  })
  .add("protobuf-es", function () {
    ProtobufES_Test.fromJson(jsonData).toBinary();
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
    ProtobufJS_Test.toObject(pbjsMsg);
  })
  .add("protobuf-es", function () {
    pbESMsg.toJson();
  })
  .add("protobuf-es (json string)", function () {
    pbESMsg.toJsonString();
  })
  .run();

newSuite("encoding empty object (json)")
  .add("protobuf.js", function () {
    ProtobufJS_Test.toObject(ProtobufJS_Test.create());
  })
  .add("protobuf-es", function () {
    new ProtobufES_Test().toJson();
  })
  .add("protobuf-es (json string)", function () {
    new ProtobufES_Test().toJsonString();
  })
  .run();

newSuite("decoding (binary)")
  .add("protobuf.js", function () {
    ProtobufJS_Test.decode(pbjsBuf);
  })
  .add("protobuf-es", function () {
    ProtobufES_Test.fromBinary(pbESBuf);
  })
  .run();

newSuite("decoding (json)")
  .add("protobuf.js", function () {
    ProtobufJS_Test.fromObject(jsonData);
  })
  .add("protobuf-es", function () {
    ProtobufES_Test.fromJson(jsonData);
  })
  .run();

newSuite("roundtrip")
  .add("protobuf.js", function () {
    ProtobufJS_Test.decode(ProtobufJS_Test.encode(jsonData).finish());
  })
  .add("protobuf-es", function () {
    ProtobufES_Test.fromBinary(ProtobufES_Test.fromJson(jsonData).toBinary());
  })
  .run();
