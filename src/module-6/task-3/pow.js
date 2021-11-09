export function pow(a, b) {
  let num = a;
  for (let i = 0; i <= b - 2; i += 1) {
    num *= a;
  }
  console.log(num);
}
