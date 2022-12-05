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

"use strict";

import * as fs from "fs";
import * as path from "path";
import * as child_process from "child_process";

import { Test as ProtobufES_Test } from "./gen/protobuf-es/data/bench_pb.js";
import { jsonData } from "./data/bench.js";

// A profiling stub to measure encoding / decoding performance using benchmark data.

var commands = ["encode", "decode", "fromjson"];
if (commands.indexOf(process.argv[2]) < 0) {
  // 0: node, 1: prof.js
  process.stderr.write(
    "usage: " +
      path.basename(process.argv[1]) +
      " <" +
      commands.join("|") +
      "> [iterations=10000000]\n"
  );
  // return;
}

// Spin up a node process with profiling enabled and process the generated log
if (process.execArgv.indexOf("--prof") < 0) {
  process.stdout.write("cleaning up old logs ...\n");
  var logRe = /^isolate-[0-9A-F]+-v8\.log$/;
  fs.readdirSync(process.cwd()).forEach(function readdirSync_it(file) {
    if (logRe.test(file)) fs.unlink(file);
  });
  process.stdout.write("generating profile (may take a while) ...\n");
  child_process.execSync(
    "node --prof --trace-deopt " +
      process.execArgv.join(" ") +
      " " +
      process.argv.slice(1).join(" "),
    {
      cwd: process.cwd(),
      stdio: "inherit",
    }
  );
  process.stdout.write("processing profile ...\n");
  fs.readdirSync(process.cwd()).forEach(function readdirSync_it(file) {
    if (logRe.test(file)) {
      child_process.execSync("node --prof-process " + file, {
        cwd: process.cwd(),
        stdio: "inherit",
      });
      // fs.unlink(file);
    }
  });
  process.stdout.write("done.\n");
  // return;
}

const count = 100;

if (process.argv.length > 3 && /^\d+$/.test(process.argv[3]))
  count = parseInt(process.argv[3], 10);
process.stdout.write(" x " + count + "\n");

switch (process.argv[2]) {
  case "encode":
    for (var i = 0; i < count; ++i) {
      ProtobufES_Test.fromJson(jsonData).toBinary();
    }
    break;
  case "decode":
    var buf = Test.encode(data).finish();
    for (var j = 0; j < count; ++j) Test.decode(buf);
    break;
}
