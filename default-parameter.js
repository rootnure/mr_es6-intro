function sum(num1, num2 = 0) {
    const total = num1 + num2;
    console.log(num1, num2, total);
    return total;
}

sum(15, 20, 25, 30, 10);
sum(5);
sum(5, 7);

function multiply(n1 = 1, n2 = 1) {
    return n1 * n2;
}

function stringJoin(str1 = "", str2 = "") {
    return str1 + str2;
}

console.log(stringJoin("abc", ".com"));

/**
 * Default values example
 * 
 * Summetion / Subtraction --> 0
 * 
 * Multiply / Division --> 1
 * 
 * Array --> Empty Array --> []
 * 
 * Object --> Empty Array --> {}
 */