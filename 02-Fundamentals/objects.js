// const jonasArras = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interstedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends"
// );

// if (jonas[interstedIn]) {
//   console.log(jonas[interstedIn]);
// } else {
//   console.log("Wrong request");
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasSchmedtmann";
// console.log(jonas);

// Challenge
//'Jonas has 3 friends, and his best friend is called Michael
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);
