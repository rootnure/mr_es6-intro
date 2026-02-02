# Mission Restart: Module 1 (JS Recap and Basic ES6)

## var, let, const
- ```var``` --> Hoisting (Not Recommended)
- ```let``` --> Used for changeable value assign
- ```const``` --> Used for constant value assign
- Temporal Deadzone --> Time between scope and initialization of ```let``` / ```const```

## Default Parameters
- Default value in function
```js
function sum(num1 = 0, num2 = 0) {
    return num1 + num2;
}

function multiply(n1 = 1, n2 = 1) {
    return n1 * n2;
}

function stringJoin(str1 = "", str2 = "") {
    return str1 + str2;
}
```

## Template String ```(``)```
- Multiple Line String
```js
const output = `this is the first line
this is the second line
and this is the last or final line`;
```
- Dynamic String ```( ${} )```
```js
const num1 = 10, num2 = 20;
const total = num1 + num2;
const output = `The total of ${num1} and ${num2} is equal to ${total}`;
```

## Arrow Function
- Implicite Return
- Use arrow ```=>```
```js
const sum = (num1, num2) => num1 + num2;
```
- Multiline Arrow Function
```js
const getAge = (birthYear, currentYear) => {
    const age = currentYear - birthYear;
    return age; // Must Return for Muliline Arrow Function
}
```
- Parenthesis is optional for single parameter arrow function
```js
// Both are same
const getDouble1 = (num) => num * 2;
const getDouble2 = num => num * 2;
```
- No parameter arrow function
```js
const log = () => console.log('logging');
```
- anonymous arrow function
```js
document.getElementById('element-id').addEventListener('click', () => {
    // do something inside anonymous arrow function
})
```
- anonymous arrow function with parameter
```js
document.getElementById('element-id').addEventListener('click', event => {
    // do something inside anonymous arrow funciton
})
```

## Spread Operator ```(...)```
- Spread String
```js
const word = 'hello';
const alphabets = ...word; // h e l l o
```
- Spread Array data
```js
const numbers = [1, 2, 3];
console.log(numbers); // [1, 2, 3]
console.log(...numbers); // 1 2 3
```
- Copy Array without reference
```js
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [...numbers];
numbers2.push(6); // don't effect "numbers" array
const numbers3 = [...numbers2, 7, 8]; // copy with new elements
const numbers4 = [0, ...number3, 9, 10]; // new elements in both side
```
- Spread during function/methode call
```js
const sumAll = (a, b, c, d) => a + b + c + d;

const arr = [2, 5, 8, 1];
const result = sumAll(...arr); // Spread operator during Function Call
const max = Math.max(...arr) // Spread operator during Methode Call
```
- Also Useable for Object
```js
const person = { name: 'Aminul', age: 27 };
const employee = { ...person, salary: 20000 };
```

## Destructuring
### Object Destructuring
- Object Must Destructure like an Object
- Destructure value using any property name of the object
- If property not present, value will be ```undefined```
```js
const { price, quantity } = { type: 'shirt', price: 1000 }; // price = 1000, quantity = undefined
```
### Array Destructuring
- Array Must Destructure like an Array
- Destructure name can be anything but index matters
- Skipping is permitted
```js
const [firstVal, , thirdVal] = [5, 6, 7, 11]; // firstVal = 5, thirdVal = 7 (Second Value is skipped)
```
- Default Value or Alias can be used
```js
const {price = 700} = {type: 'pant', quantity: 10}; // Default Value
const { price: productPrice } = {type: 'pant', price: 600}; // Alias
```