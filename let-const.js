// es6
// const --> Can't change value
const country = 'Bangladesh';
const countryName = country + " (BD)";
console.log(countryName);

// let --> Used for changeable values
let age = 20;
age = 50;
console.log(age);

// can't access before initialization
// console.log(year); // Temporal Dead Zone (Time between scope and initialization of let/const)
const year = 2026;

const chargePercentage = 100;
// chargePercentage = 99;
console.log(chargePercentage);

const friends = ['Rakib', 'Sagor', 'Redwan'];
friends.push('Rifat');
console.log(friends);

const person = {name: 'Ashiq', age: 20};
person.gender = 'male';
console.log(person);