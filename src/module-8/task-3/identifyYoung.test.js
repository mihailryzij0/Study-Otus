import { identifyYoung } from "./identifyYoung";

describe("identifyYoung", () => {
  it("return b for a = '04.02.1997' ,b = '03.02.1997'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    identifyYoung("04.02.1997", "03.02.1997");
    expect(consoleSpy).toHaveBeenCalledWith("b");
  });
});
