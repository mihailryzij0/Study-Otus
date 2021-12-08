import { getMaxNumber } from "./getMaxNumber";

const arr = `${Math.floor(Math.random() * 1000000000000000)}`
  .split("")
  .map(Number);

describe("getMaxNumber", () => {
  it(`return numberMin ${Math.min(...arr)},
             numberMax ${Math.max(...arr)} `, () => {
    const consoleSpy = jest.spyOn(console, "log");
    getMaxNumber(arr);
    expect(consoleSpy).toHaveBeenCalledWith(Math.min(...arr), Math.max(...arr));
  });
});
