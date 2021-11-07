import { sumSimbol } from "./sumSimbol";

describe("calc", () => {
  it("return 14 for firstName = 'Mihail' and lastName = 'Kozancev'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    sumSimbol("Mihail", "Kozancev");
    expect(consoleSpy).toHaveBeenCalledWith(14);
  });
});
