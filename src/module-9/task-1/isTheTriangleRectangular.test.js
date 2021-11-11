import { isTheTriangleRectangular } from "./isTheTriangleRectangular";

describe("isTheTriangleRectangular", () => {
  it(" return true for 4, 5, 3", () => {
    expect(isTheTriangleRectangular(4, 5, 3)).toBeTruthy();
  });
  it(" return false for 3, 4, 3", () => {
    expect(isTheTriangleRectangular(3, 4, 3)).toBeFalsy();
  });
});
