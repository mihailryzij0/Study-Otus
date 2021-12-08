export function sumSimbolValuePrompt() {
  let num = prompt("введите трехзначное число, ");
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return console.log(sum);
}
