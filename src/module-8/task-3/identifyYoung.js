export function identifyYoung(a, b) {
  function formatter(valData) {
    const [day, manth, year] = valData.split(".");
    const newData = new Date(`${year}-${manth}-${day}`);
    return Number(newData);
  }

  if (formatter(a) > formatter(b)) {
    console.log("b");
  } else {
    console.log("a");
  }
}
