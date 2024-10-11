import reducer, { todoAdded } from "../features/userSlice";
import { describe, test, it, expect } from "vitest";
test("should return the initial state", () => {
  expect(reducer(undefined, { type: "unknown" })).toEqual(
    { users: [], photos: [], loading: false, error: null },
  );
});

