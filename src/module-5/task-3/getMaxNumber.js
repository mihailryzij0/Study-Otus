export function getMaxNumber(array) {
  const maxNumber = Math.max(...array);
  const minNumber = Math.min(...array);
  return console.log(minNumber, maxNumber);
}
