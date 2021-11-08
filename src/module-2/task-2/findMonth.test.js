import { findMonth } from "./findMonth";

describe("findMonth", () => {
  it("return 'январь' for '1'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("1");
    findMonth();
    expect(consoleSpy).toHaveBeenCalledWith("ЯНВАРЬ");
  });
  it("return 'нет такого месяца' for '-1'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("-1");
    findMonth();
    expect(consoleSpy).toHaveBeenCalledWith("нет такого месяца");
  });
  it("return 'нет такого месяца' for '13'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("13");
    findMonth();
    expect(consoleSpy).toHaveBeenCalledWith("нет такого месяца");
  });
});
