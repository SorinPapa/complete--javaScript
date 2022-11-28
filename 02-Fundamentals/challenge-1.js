// 
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);

const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win the cup (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win the cup (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`Nobody wins the trophy!`);
  }
};
console.log(checkWinner(scoreDolphins,scoreKoalas));
console.log(checkWinner(scoreKoalas,scoreDolphins));

console.log(checkWinner(3,89));