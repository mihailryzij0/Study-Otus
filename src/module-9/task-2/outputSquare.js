export function outputSquare() {
  const radius = prompt("Введите радиус");
  const p = (2 * Math.PI * radius).toFixed(0);
  const s = (Math.PI * radius ** 2).toFixed(0);
  console.log(p, s);
}
