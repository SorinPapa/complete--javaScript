const calcAge = function (year) {
  return 2037 - year;
};

const yearUntielRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  // return `${firstName} retires in ${retirement} years.`;
};

// console.log(yearUntielRetirement(1991, "Sorin"));
console.log(yearUntielRetirement(1950, "Mike"));
