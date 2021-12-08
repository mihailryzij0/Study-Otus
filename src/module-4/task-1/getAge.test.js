import { getAge } from "./getAge";

describe("getAge", () => {
  it('return { name: "", age: "", role: "" } for prompt = 34', () => {
    const consoleSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("34");
    getAge();
    expect(consoleSpy).toHaveBeenCalledWith({
      name: "John",
      age: "34",
      role: "admin",
    });
  });
});
