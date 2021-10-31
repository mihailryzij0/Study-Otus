import { calc } from "./calc";

describe("calc", () => {
  it("returns 6 for (3,3)", () => {
    expect(calc(3, 3)).toBe(6);
  });
});
