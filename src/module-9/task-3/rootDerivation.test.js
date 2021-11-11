import { rootDerivation } from "./rootDerivation";

describe("rootDerivation", () => {
  it("returns [0] for a = 4, b =6 ,c = 9", () => {
    jest
      .spyOn(window, "prompt")
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(6)
      .mockReturnValueOnce(9);
    expect(rootDerivation()).toBe([0]);
  });
  it("returns [-1, -1.5] for a = 20, b =50 ,c = 30", () => {
    jest
      .spyOn(window, "prompt")
      .mockReturnValueOnce(20)
      .mockReturnValueOnce(50)
      .mockReturnValueOnce(30);
    expect(rootDerivation()).toBe([-1, -1.5]);
  });
});
