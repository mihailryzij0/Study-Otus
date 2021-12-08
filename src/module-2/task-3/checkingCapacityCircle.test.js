import { checkingCapacityCircle } from "./checkingCapacityCircle";

describe("checkingCapacityCircle", () => {
  it("return true for circle = 30 and square = 40", () => {
    const consoleSpy = jest.spyOn(console, "log");
    checkingCapacityCircle(30, 40);
    expect(consoleSpy).toHaveBeenCalledWith(true);
  });
  it("return false for circle = 300 and square = 40", () => {
    const consoleSpy = jest.spyOn(console, "log");
    checkingCapacityCircle(300, 40);
    expect(consoleSpy).toHaveBeenCalledWith(false);
  });
  it("return false for circle = 30 and square = 10", () => {
    const consoleSpy = jest.spyOn(console, "log");
    checkingCapacityCircle(30, 10);
    expect(consoleSpy).toHaveBeenCalledWith(false);
  });
});
