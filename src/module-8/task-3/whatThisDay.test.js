import { whatThisDay } from "./whatThisDay";

describe("whatThisDay", () => {
  it("return вторник for 04.02.1997", () => {
    const consoleSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("04.02.1997");
    whatThisDay();
    expect(consoleSpy).toHaveBeenCalledWith("вторник");
  });
});
