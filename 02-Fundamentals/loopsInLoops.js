const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  "Sorin",
];

// 0,1,...,4
//4,3,..,0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i], typeof jonas);
}

let cup='';
for (let exercise = 1; exercise < 4; exercise++) {
  console.log();
  console.log(" ");

  console.log(`----Startgin exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting ${exercise} wieght repetition ${rep} `);
  }
}
