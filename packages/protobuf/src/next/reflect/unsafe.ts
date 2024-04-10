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

import type { DescField, DescOneof } from "../../descriptor-set.js";
import { localName } from "./names.js";
import type { OneofADT } from "./guard.js";
import { isScalarZeroValue, scalarZeroValue } from "../../private/scalars.js";

// TODO avoid copy by not exposing these enums in Desc*
/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
enum Edition {
  EDITION_UNKNOWN = 0,
  EDITION_PROTO2 = 998,
  EDITION_PROTO3 = 999,
  EDITION_2023 = 1000,
  EDITION_2024 = 1001,
  EDITION_1_TEST_ONLY = 1,
  EDITION_2_TEST_ONLY = 2,
  EDITION_99997_TEST_ONLY = 99997,
  EDITION_99998_TEST_ONLY = 99998,
  EDITION_99999_TEST_ONLY = 99999,
  EDITION_MAX = 2147483647,
}

export const unsafeLocal = Symbol.for("reflect unsafe local");

/**
 * Return the selected field of a oneof group.
 *
 * @private
 */
export function unsafeOneofCase(
  target: Record<string, any>, // eslint-disable-line @typescript-eslint/no-explicit-any -- `any` is the best choice for dynamic access
  oneof: DescOneof,
) {
  const c = (target[localName(oneof)] as OneofADT).case;
  if (c === undefined) {
    return c;
  }
  return oneof.fields.find((f) => localName(f) === c);
}

/**
 * Returns true if the field is set.
 *
 * @private
 */
export function unsafeIsSet(
  target: Record<string, any>, // eslint-disable-line @typescript-eslint/no-explicit-any -- `any` is the best choice for dynamic access
  field: DescField,
) {
  const name = localName(field);
  if (field.oneof) {
    return target[localName(field.oneof)].case === name; // eslint-disable-line @typescript-eslint/no-unsafe-member-access
  }
  switch (field.fieldKind) {
    case "enum":
    case "scalar":
      if (field.parent.file.edition == Edition.EDITION_PROTO2) {
        // explicit presence
        return (
          Object.prototype.hasOwnProperty.call(target, name) &&
          target[name] !== undefined
        );
      }
      if (field.optional) {
        return target[name] !== undefined;
      }
      // implicit presence
      if (field.fieldKind == "enum") {
        return target[name] !== field.enum.values[0].number;
      }
      return !isScalarZeroValue(field.scalar, target[name]);
    case "message":
      return target[name] !== undefined;
    case "list":
      return (target[name] as unknown[]).length > 0;
    case "map":
      return Object.keys(target[name]).length > 0; // eslint-disable-line @typescript-eslint/no-unsafe-argument
  }
}

/**
 * Returns true if the field is set, but only for singular fields with explicit
 * presence (proto2).
 *
 * @private
 */
export function unsafeIsSetExplicit(target: object, localName: string) {
  return (
    Object.prototype.hasOwnProperty.call(target, localName) &&
    (target as Record<string, unknown>)[localName] !== undefined
  );
}

/**
 * Return a field value, respecting oneof groups.
 *
 * @private
 */
export function unsafeGet(
  target: Record<string, unknown>,
  field: DescField,
): unknown {
  const name = localName(field);
  if (field.oneof) {
    const oneof = target[localName(field.oneof)] as OneofADT;
    if (oneof.case === name) {
      return oneof.value;
    }
    return undefined;
  }
  return target[name];
}

/**
 * Set a field value, respecting oneof groups.
 *
 * @private
 */
export function unsafeSet(
  target: Record<string, unknown>,
  field: DescField,
  value: unknown,
) {
  const name = localName(field);
  if (field.oneof) {
    target[localName(field.oneof)] = {
      case: name,
      value: value,
    };
  } else {
    target[name] = value;
  }
}

/**
 * Resets the field, so that unsafeIsSet() will return false.
 *
 * @private
 */
export function unsafeClear(
  target: Record<string, any>, // eslint-disable-line @typescript-eslint/no-explicit-any -- `any` is the best choice for dynamic access
  field: DescField,
) {
  // TODO this can be cleaned up. see createZeroMessage from create.ts

  const name = localName(field);
  if (field.oneof) {
    const oneofLocalName = localName(field.oneof);
    if ((target[oneofLocalName] as OneofADT).case === name) {
      target[oneofLocalName] = { case: undefined };
    }
  } else {
    switch (field.fieldKind) {
      case "map":
        target[name] = {};
        break;
      case "list":
        target[name] = [];
        break;
      case "enum":
        if (
          !field.optional &&
          field.parent.file.edition == Edition.EDITION_PROTO3
        ) {
          target[name] = field.enum.values[0].number;
        } else {
          delete target[name];
        }
        break;
      case "scalar":
        if (
          !field.optional &&
          field.parent.file.edition == Edition.EDITION_PROTO3
        ) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          target[name] = scalarZeroValue(field.scalar, field.longType);
        } else {
          delete target[name];
        }
        break;
      case "message":
        target[name] = undefined;
        break;
    }
  }
}

/**
 * Add an item to a list field.
 *
 * @private
 */
export function unsafeAddListItem(
  target: Record<string, unknown>,
  field: DescField & { fieldKind: "list" },
  value: unknown,
) {
  const name = localName(field);
  (target[name] as unknown[]).push(value);
}

/**
 * Set a map entry.
 *
 * @private
 */
export function unsafeSetMapEntry(
  target: Record<string, unknown>,
  field: DescField & { fieldKind: "map" },
  key: string | number,
  value: unknown,
) {
  const name = localName(field);
  (target[name] as Record<string | number, unknown>)[key] = value;
}