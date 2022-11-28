const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(`My best friend is ${friends[0]}.`);

const newYears = new Array(1983, 1989, 2022);
console.log(newYears[newYears.length - 1]);

friends[2] = "George";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2022 - 1991, friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);

const age2 = calcAge(years[1]);

const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);