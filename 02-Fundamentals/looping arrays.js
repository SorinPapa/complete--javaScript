const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
let counter = jonasArray.length - 1;

const types = [];

for (let i = 0; i <= counter; i++) {
  types[i] = typeof jonasArray[i];
  console.log(jonasArray[i], typeof jonasArray);

  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('Only strings');
for (let i = 0; i < years.length; i++) {
  if (typeof jonasArray[i]!=='string') continue;

console.log(jonasArray[i], typeof jonasArray);
}

console.log("Break with number");
for (let i = 0; i < years.length; i++) {
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], typeof jonasArray);
}

