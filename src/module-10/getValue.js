export function getValue(val) {
  const testMail = /[a-zA-Z_0-9]+@[a-z0-9]+[a-z]{2,5}/;
  const testDate = /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/;
  if (testMail.test(val)) {
    console.log("mail");
  }
  if (testDate.test(val)) {
    console.log("dat");
  }
}
