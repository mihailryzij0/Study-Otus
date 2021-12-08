import { sumSimbolValuePrompt } from "./sumSimbolValuePrompt";

describe("sumSimbolValuePrompt", () => {
  it("return 9 for 234", () => {
    const consoleSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("234");
    sumSimbolValuePrompt();
    expect(consoleSpy).toHaveBeenCalledWith(9);
  });
});
