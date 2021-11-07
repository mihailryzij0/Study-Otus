export function calc(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return console.log(NaN);
  }
  const sum = a + b;
  const mult = a * b;
  return console.log(sum, mult);
}
