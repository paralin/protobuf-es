import { protoInt64 } from "@bufbuild/protobuf";

export const jsonData = {
  string: "Lorem ipsum dolor sit amet.",
  uint32: 9000,
  inner: {
    int32: 20161110,
    innerInner: {
      longField: protoInt64.uDec(1051, 151234).toString(),
      enum: 1,
      sint32: -42,
    },
  },
  float: 0.25,
};
