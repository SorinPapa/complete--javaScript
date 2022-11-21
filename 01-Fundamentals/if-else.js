// type convertion
const age = 15;

if (age > 18) {
  console.log(`he is available 🐱‍🏍`);
} else {
  const yearsLeft = 18 - age;
  console.log(`He is too young. Wait anothe ${yearsLeft} years.`);
}
const birthYear = 2991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

console.log(typeof String(23), typeof 23);

// type coercion
console.log("23" - "10" + 2);

console.log(Boolean(1));

const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else {
  console.log("Number is not 23 or 7! ");
}
