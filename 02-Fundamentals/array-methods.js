const friends = ["Michael", "Steven", "Peter"];

// ADD alements
friends.push("Jay");
console.log(friends);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23)

console.log(friends.includes('ana'));
console.log(friends.includes('Peter'));
console.log(friends.includes(23));

if(friends.includes('Peter')){
  console.log('You have a friend called Peter.');
}