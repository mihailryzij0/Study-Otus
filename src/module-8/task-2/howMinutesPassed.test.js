import { howMinutesPassed } from "./howMinutesPassed";

describe("howMinutesPassed", () => {
  it("return error for data = 'abc'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    howMinutesPassed("abc");
    expect(consoleSpy).toHaveBeenCalledWith("error");
  });
});
