export function checkLine() {
  const prom = prompt("Введите строку ").split(" ");
  if (prom.length > 1) {
    console.log(false);
  } else {
    console.log(true);
  }
}
