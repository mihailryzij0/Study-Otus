export function howMinutesPassed(data) {
  if (data instanceof Date) {
    const hrs = data.getHours();
    const mins = data.getMinutes();
    const resalt = hrs * 60 + mins;
    console.log(resalt);
  } else {
    console.log("error");
  }
}
