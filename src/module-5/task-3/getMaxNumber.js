export function getMaxNumber(array) {
  let maxNumber = array[0];
  let minNumber = array[0];
  array.forEach((el) => {
    if (maxNumber < el) {
      maxNumber = el;
    }
    if (minNumber > el) {
      minNumber = el;
    }
  });

  return console.log(minNumber, maxNumber);
}
