const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
let counter = jonasArray.length - 1;

const types = [];

for (let i = 0; i <= counter; i++) {
  types[i] = typeof jonasArray[i];
  console.log(jonasArray[i]);
}
console.log(types);
