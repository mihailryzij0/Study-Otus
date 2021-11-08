import { multiTable } from "./multiTable";

const multiTableFour = [
  "1 * 4 = 4",
  "2 * 4 = 8",
  "3 * 4 = 12",
  "4 * 4 = 16",
  "5 * 4 = 20",
  "6 * 4 = 24",
  "7 * 4 = 28",
  "8 * 4 = 32",
  "9 * 4 = 36",
  "10 * 4 = 40",
];

describe("multiTable", () => {
  it('return [..."4 * 4 = 16"] for number = 4', () => {
    const consoleSpy = jest.spyOn(console, "log");
    multiTable(4);
    expect(consoleSpy).toHaveBeenCalledWith(multiTableFour);
  });
  it("return NaN for number = -4", () => {
    const consoleSpy = jest.spyOn(console, "log");
    multiTable(-4);
    expect(consoleSpy).toHaveBeenCalledWith(NaN);
  });
  it("return NaN for number = 14", () => {
    const consoleSpy = jest.spyOn(console, "log");
    multiTable(14);
    expect(consoleSpy).toHaveBeenCalledWith(NaN);
  });
  it('return NaN for number = "abc"', () => {
    const consoleSpy = jest.spyOn(console, "log");
    multiTable("abc");
    expect(consoleSpy).toHaveBeenCalledWith(NaN);
  });
});
