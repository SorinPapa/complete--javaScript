let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the competition with ${scoreDolphins} points.`);
} else if (scoreKoalas > scoreDolphins) {
  console.log(`Koalas win the competition with ${scoreKoalas} points.`);
} else {
  console.log(`There is a draw!`);
}

// Bonus 1
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (105 + 95 + 123) / 3;

if ((scoreDolphins <= 100) & (scoreKoalas <= 100)) {
  console.log("There is no winner!");
} else if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the 🏆 with ${scoreDolphins} points.`);
} else if (scoreKoalas > scoreDolphins) {
  console.log(`Koalas win the 🏆 with ${scoreKoalas} points.`);
} else {
  console.log("We have a draw!");
}
