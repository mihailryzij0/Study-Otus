import { howMinutesPassed } from "./howMinutesPassed.js";

describe("howMinutesPassed", () => {
  it("return error for data = 'abc'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    howMinutesPassed("abc");
    expect(consoleSpy).toHaveBeenCalledWith("error");
  });
  it("return minutes for data = 'abc'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    jest
      .useFakeTimers()
      .setSystemTime(new Date(1996, 11, 17, 3, 25, 0).getTime());
    howMinutesPassed(new Date(1996, 11, 17, 3, 25, 0));
    expect(consoleSpy).toHaveBeenCalledWith(205);
  });
});
