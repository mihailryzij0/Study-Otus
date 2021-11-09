import { pow } from "./pow";

describe("pow", () => {
  it("return 64 for a = 8 and b = 2", () => {
    const consoleSpy = jest.spyOn(console, "log");
    pow(8, 2);
    expect(consoleSpy).toHaveBeenCalledWith(64);
  });
  it("return 100 for a = 10 and b = 2", () => {
    const consoleSpy = jest.spyOn(console, "log");
    pow(10, 2);
    expect(consoleSpy).toHaveBeenCalledWith(100);
  });
});
