let cup = "🏋️‍♂️";

// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`Lifting weights repetitions ${rep} ${(cup += "🏋️‍♂️")} `);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetitions ${rep} ${(cup += "🏋️‍♂️")} `);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end!`);
  }
}
