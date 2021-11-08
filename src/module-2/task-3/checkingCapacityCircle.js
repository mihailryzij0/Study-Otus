export function checkingCapacityCircle(circle, square) {
  const RCircle = Math.sqrt(circle) / 3.14;
  const DSquare = Math.sqrt(square);

  if (2 * RCircle < DSquare) {
    return console.log(true);
  }
  return console.log(false);
}
