export function isTheTriangleRectangular(a, b, c) {
  const arr = [a, b, c].sort();

  const a2 = arr[0] ** 2;
  const b2 = arr[1] ** 2;
  const c2 = arr[2] ** 2;

  return a2 + b2 === c2;
}
