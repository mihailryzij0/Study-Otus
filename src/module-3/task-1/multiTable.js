const result = [];
export function multiTable(number) {
  if (number > 10 || number < 1 || typeof number !== "number") {
    return console.log(NaN);
  }
  for (let i = 1; i <= 10; i += 1) {
    result.push(`${i} * ${number} = ${i * number}`);
  }
  return console.log(result);
}
