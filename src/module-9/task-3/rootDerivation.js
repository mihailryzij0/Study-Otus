export function rootDerivation() {
  const a = prompt("введите  a");
  const b = prompt("введите b");
  const c = prompt("введите c");
  const d = b ** 2 - 4 * a * c;
  let first;
  let second;

  if (d > 0) {
    first = (-b + d ** 0.5) / (2 * a);
    second = (-b - d ** 0.5) / (2 * a);
    return [first, second];
  }
  if (d === 0) {
    first = -b / (2 * a);
    return [1];
  }
  return [0];
}
