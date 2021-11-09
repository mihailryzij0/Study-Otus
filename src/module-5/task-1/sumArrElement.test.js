import { sumArrElement } from "./sumArrElement";

const arr = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];

describe("sumArrElement", () => {
  it("return 45 ", () => {
    const consoleSpy = jest.spyOn(console, "log");
    sumArrElement(arr);
    expect(consoleSpy).toHaveBeenCalledWith(45);
  });
});
