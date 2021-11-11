import { outputSquare } from "./outputSquare";

describe("outputSquare", () => {
  it("return 25 , 50 for prompt = 3", () => {
    jest.spyOn(window, "prompt").mockReturnValue(4);
    jest.spyOn(console, "log");
    outputSquare();
    expect(console.log).toHaveBeenCalledWith("25", "50");
  });
});
