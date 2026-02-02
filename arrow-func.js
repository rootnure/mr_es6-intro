// function declaration
function add(num1, num2) {
    return num1 + num2;
}

// function expression
const addition = function(num1, num2) {
    return num1 + num2;
}

// arrow function
const add2 = (num1, num2) => num1 + num2; // implicite return
const multiply = (n1, n2) => n1 * n2;
const sumAll = (n1, n2, n3, n4, n5) => n1 + n2 + n3 + n4 + n5;
const isFirstBig = (n1, n2) => n1 > n2;

// multi line arrow function
const findAge = (birthYear) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const age = currentYear - birthYear;
    return age;
}


// const result = add(23, 52);
// const result = addition(23, 52);
// const result = add2(23, 52);
// const result = multiply(5, 10);
// const result = sumAll(2, 5, 7, 1, 9);
// const result = isFirstBig(9, 8);
const result = findAge(2005);
console.log(result);