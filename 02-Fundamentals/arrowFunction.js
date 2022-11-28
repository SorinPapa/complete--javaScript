const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1983);
console.log(age3);

const yearUntielRetirement = (birthYear, firstName) => {
  const age=2037 -birthYear;
  const retirement=65-age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`
};

console.log(yearUntielRetirement(1983,'Sorin'));
console.log(yearUntielRetirement(1985,'Andrei'));
