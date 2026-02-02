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