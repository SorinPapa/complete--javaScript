'use strict';

const sorin = {
  firstName: 'Sorin',
  lastName: 'Papa',
  year: 1983,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    // console.log(this);
    console.log(`Hey ${this.firstName}!`);
  },
};

sorin.greet();
// sorin.calcAge();


// arguments keyword
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;
