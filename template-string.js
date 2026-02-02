// const poem = 'aam pata jora jora'+
// 'marbo chabuk chorbo ghora'+
// 'ore bubu fire dara'+
// 'aschey amr pagla ghora';

const poem = `aam pata jora jora
marbo chabuk chorbo ghora
ore bubu fire dara
aschey amr pagla ghora`;

// console.log(poem);

function sum(num1, num2) {
    const total = num1 + num2;
    // const output = 'Sum of ' + num1 + ' and ' + num2 + ' is equal to ' + total;
    const output = `Sum of ${num1} and ${num2} is equal to ${total}`;
    console.log(output);
}

// sum(5, 2);


function discountedPrice(price, discount) {
    const payablePrice = price - discount;
    const output = `Payable price after ${discount} taka discount is ${payablePrice} taka`;
    console.log(output);
}

discountedPrice(1000, 50);