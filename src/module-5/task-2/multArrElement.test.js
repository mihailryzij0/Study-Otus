import { multArrElement } from "./multArrElement";

const arr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10],
];

describe("multArrElement", () => {
  it("return [2, 4, 6, ...] ", () => {
    const consoleSpy = jest.spyOn(console, "log");
    multArrElement(arr[0], 2);
    expect(consoleSpy).toHaveBeenCalledWith([
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
    ]);
  });
  it("return [-2, -4, -6, ...] ", () => {
    const consoleSpy = jest.spyOn(console, "log");
    multArrElement(arr[1], 2);
    expect(consoleSpy).toHaveBeenCalledWith([
      -2, -4, -6, -8, -10, -12, -14, -16, -18, -20,
    ]);
  });
  it("return [-1, -2, -3, ...] ", () => {
    const consoleSpy = jest.spyOn(console, "log");
    multArrElement(arr[1], 1);
    expect(consoleSpy).toHaveBeenCalledWith([
      -1, -2, -3, -4, -5, -6, -7, -8, -9, -10,
    ]);
  });
});
