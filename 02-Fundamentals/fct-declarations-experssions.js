// Function declaration
function calcAge1(birthYear) {
  // const age= 2037 -birthYear;
  // return age;
  return 2022 - birthYear;
}

const age1 = calcAge1(1982);
console.log(age1);

const ageSorin = calcAge1(1983);
console.log(ageSorin);

// Funciton Expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

console.log(age1, calcAge2(1984));

// Arrow Function
const calcAge3= (birthYear) => 2037 - birthYear;
console.log(calcAge3(2007));
const age3=calcAge3(2007);
console.log(age3);
