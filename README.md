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