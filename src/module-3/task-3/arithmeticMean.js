export function arithmeticMean() {
  const number = +prompt("Введите счисло, ");
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return console.log(sum / number);
}
