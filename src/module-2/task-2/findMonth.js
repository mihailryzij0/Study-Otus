const yar = {
  1: "ЯНВАРЬ",
  2: "ФЕВРАЛЬ",
  3: "МАРТ",
  4: "АПРЕЛЬ",
  5: "МАЙ",
  6: "ИЮНЬ",
  7: "ИЮЛЬ",
  8: "АВГУСТ",
  9: "СЕНТЯБРЬ",
  10: "ОКТЯБРЬ",
  11: "НОЯБРЬ",
  12: "ДЕКАБРЬ",
};
export function findMonth() {
  const moth = prompt("Введите номер месяца, ");
  if (moth < 1 || moth > 12) {
    return console.log("нет такого месяца");
  }
  return console.log(yar[moth]);
}
