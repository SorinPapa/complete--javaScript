const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  graduatedYear: 2027,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (anNastere) {
  //   return 2037 - anNastere;
  // },
  // calcAge:function() {
  //   return 2037-this.birthYear
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
// Challenge:
// "Jonas is a 46-yearr old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());
