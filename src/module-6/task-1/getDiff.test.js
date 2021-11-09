import { getDiff } from "./getDiff";

describe("getDiff", () => {
  it("return 5 for a = 15 b = 10", () => {
    const consoleSpy = jest.spyOn(console, "log");
    getDiff(15, 10);
    expect(consoleSpy).toHaveBeenCalledWith(5);
  });
  it("return 7 for a = 17 b = 10", () => {
    const consoleSpy = jest.spyOn(console, "log");
    getDiff(17, 10);
    expect(consoleSpy).toHaveBeenCalledWith(7);
  });
  it("return NaN for a = 17 b = 'b'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    getDiff(17, "b");
    expect(consoleSpy).toHaveBeenCalledWith(NaN);
  });
});
