let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

markBmi = markMass / johnHeight ** 2;
johnBmi = johnMass / johnHeight ** 2;

markHigherBMI = markBmi < johnBmi;
console.log(markHigherBMI);

// challenge 2

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`);
} else {
  console.log(`John's BMI (${johnBmi}) is highe than Mark's BMI (${markBmi})`);
}
