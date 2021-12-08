import { getMaxNumber } from "./getMaxNumber";

describe("getMaxNumber", () => {
  it("return 10 for (8, 10)", () => {
    const consoleSpy = jest.spyOn(console, "log");
    getMaxNumber(8, 10);
    expect(consoleSpy).toHaveBeenCalledWith(10);
  });
});
