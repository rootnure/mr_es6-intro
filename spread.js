const numbers = [1, 5, 3, 6, 9, 21, 6];
// console.log(numbers);
// console.log(...numbers);

// const max = Math.max(1, 5, 3, 6, 9, 21, 6);
const max = Math.max(...numbers);
// console.log(max);

// const first = [1, 2, 3, 4, 5];
// const second = first;
// second.push(6);
// console.log(first);


const first = [1, 2, 3, 4, 5];
const second = [...first];
second.push(6);
const third = [...second, 7, 8]

// console.log(first, second, third);

const addAll = (a, b, c) => a + b + c;

const digits = [74, 66, 91];
const result = addAll(...digits); // Spread during function call
console.log(result);

// Spread operator for Object
const person = {name: 'Aminul', age: 27};
const employee = {...person, salary: 20000};

console.log(..."abc");