export function getAge() {
  const user = {
    name: "John",
    age: prompt("how old are you, "),
  };

  const admin = { ...user, role: "admin" };
  return console.log(admin);
}
