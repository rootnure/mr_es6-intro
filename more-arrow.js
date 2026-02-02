const getTax = (amount, taxRate) => amount * taxRate / 100;
const add = (p, q) => p + q;

// single parameter arrow function (Parenthesis is optional for single parameter)
const getDouble = num => num * 2;
const getHalf = num => num / 2;
const firstElement = arr => arr[0];

// console.log(getDouble(5))
const arrow = [5, 2, 4, 9];
// console.log(firstElement(arrow));


// no parameter arrow function
const log = () => console.log('logging');

log();

// anonymous arrow function
document.getElementById('element-id').addEventListener('click', () => {
    // do something inside anonymous arrow function
})

// anonymous arrow function with parameter
document.getElementById('element-id').addEventListener('click', event => {
    // do something inside anonymous arrow funciton
})