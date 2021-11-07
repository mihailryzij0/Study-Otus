import { sumSimbolValuePrompt } from "./sumSimbolValuePrompt";

describe("sumSimbolValuePrompt", () => {
  it("return 14 for firstName = 'Mihail' and lastName = 'Kozancev'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("234");
    sumSimbolValuePrompt();
    expect(consoleSpy).toHaveBeenCalledWith(9);
  });
});
