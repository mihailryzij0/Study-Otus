import { sumAllNumbers } from "./sumAllNumbers";

describe("sumAllNumbers", () => {
  it("return 3825 for start = 50 and end = 100", () => {
    const consoleSpy = jest.spyOn(console, "log");
    sumAllNumbers(50, 100);
    expect(consoleSpy).toHaveBeenCalledWith(3825);
  });
  it("return NaN for start = 100 and end = 50", () => {
    const consoleSpy = jest.spyOn(console, "log");
    sumAllNumbers(100, 50);
    expect(consoleSpy).toHaveBeenCalledWith(NaN);
  });
  it("return NaN for start = abc and end = 100", () => {
    const consoleSpy = jest.spyOn(console, "log");
    sumAllNumbers("abc", 100);
    expect(consoleSpy).toHaveBeenCalledWith(NaN);
  });
});
