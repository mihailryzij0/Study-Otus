import { arithmeticMean } from "./arithmeticMean";

describe("arithmeticMean", () => {
  it("return 1.8 for 5", () => {
    const consoleSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("5");
    arithmeticMean();
    expect(consoleSpy).toHaveBeenCalledWith(1.8);
  });
});
