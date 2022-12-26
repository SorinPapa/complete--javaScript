// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error." //

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//  1. Understanding the problem
// What is temperature amplitude ?
//A: the difference between highest and the lowest temperature ?

// How to compute the max and min temperatures ?
// What's a sensor error ? And what to do ?

//  2. Breaking up into sub-problems
// -How to ignore errors ?
// Find max and min value in tems array
// Substract min from max (amplituted) and return it
console.log("First case with one array of temeperatures:");
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temperatures
// 1. Understanding the problem :
// -with 2 arrays, should we implement functionality twice ?
// answe: no ! just merge 2 arrays

// 2. Breaking up into sub-problems
//-merge 2 arrays
console.log("Second case with 2 arrays of temeperatures:");
const t1 = [3, 5, 1];
const t2 = [9, 0, 5];

const calcTempAmplitudeTemps = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max);
  return max - min;
};

const amplitude2 = calcTempAmplitudeTemps(t1, t2);
console.log(amplitude2);

//3.  Measure of temperature in Kelvin degrees: 273 +Celsius degrees:
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };
  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// a) identify the bug
// Done-the value is a string and i will have the value concateneted as a string
// b) resolv the bug :
