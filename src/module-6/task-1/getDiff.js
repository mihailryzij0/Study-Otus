export function getDiff(a, b) {
  if (typeof a === "number" && typeof a === "number") {
    if (a > b) {
      return console.log(a - b);
    }
    return console.log(b - a);
  }
  return console.log(NaN);
}
