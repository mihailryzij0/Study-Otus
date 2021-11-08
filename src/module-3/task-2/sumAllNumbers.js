export function sumAllNumbers(start, end) {
  if (start > end || typeof start !== "number" || typeof end !== "number") {
    return console.log(NaN);
  }
  let total = 0;
  for (let i = start; i <= end; i += 1) {
    total += i;
  }
  return console.log(total);
}
