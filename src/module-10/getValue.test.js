import { getValue } from "./getValue";

describe("rootDerivation", () => {
  it("returns dat for 03.02.1997 ", () => {
    const consoleSpy = jest.spyOn(console, "log");
    getValue("03.02.1997");
    expect(consoleSpy).toHaveBeenCalledWith("dat");
  });
  it("returns mail for rizhuMihailo@mail.com ", () => {
    const consoleSpy = jest.spyOn(console, "log");
    getValue("rizhuMihailo@mail.com");
    expect(consoleSpy).toHaveBeenCalledWith("mail");
  });
});
