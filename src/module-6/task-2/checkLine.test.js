import { checkLine } from "./checkLine";

describe("checkLine", () => {
  it('return true for prom = "слово"', () => {
    const consoleSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("слово");
    checkLine();
    expect(consoleSpy).toHaveBeenCalledWith(true);
  });
  it('return false for prom = " два слова"', () => {
    const consoleSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("два слова");
    checkLine();
    expect(consoleSpy).toHaveBeenCalledWith(false);
  });
});
