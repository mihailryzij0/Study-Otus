export function whatThisDay() {
  const input = prompt("ДД.ММ.ГГГГ");
  const [day, manth, year] = input.split(".");
  const data = new Date(`${year}-${manth}-${day}`);
  const days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  const thisDay = days[data.getDay()];
  console.log(thisDay);
}
