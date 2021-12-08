import { calc } from "./calc";

describe("calc", () => {
  it("return 8,15 for a = 3 and b = 5", () => {
    const consoleSpy = jest.spyOn(console, "log");
    calc(3, 5);
    expect(consoleSpy).toHaveBeenCalledWith(8, 15);
  });
  it("return NaN for a = 3 and b = 'd'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    calc(3, "d");
    expect(consoleSpy).toHaveBeenCalledWith(NaN);
  });
  it("return 8,15 for a = 'd' and b = 5", () => {
    const consoleSpy = jest.spyOn(console, "log");
    calc("d", 5);
    expect(consoleSpy).toHaveBeenCalledWith(NaN);
  });
});
