// Object Destructuring
const product = { type: 'shirt', price: 500, quantity: 11 };

// Repeatation process
// const discount = product.price*20/100;
// const yourPay = product.price-discount;
// const vatAmount = product.price*7/100;
// const totalAmount = yourPay + vatAmount;

// Non repeatation process
// const price = product.price;
// const discount = price*20/100;
// const yourPay = price-discount;
// const vatAmount = price*7/100;
// const totalAmount = yourPay + vatAmount;

// Destructuring process
const { price } = product; // <----------------
const discount = price*20/100;
const yourPay = price-discount;
const vatAmount = price*7/100;
const totalAmount = yourPay + vatAmount;

console.log(totalAmount);


// Array Destructuring
const [firstVal, , thirdVal] = [5, 6, 7, 11];
console.log(firstVal, thirdVal) // firstVal = 5, thirdVal = 7 (Second Value is skipped)

// Default Value
// const {company = 'abc ltd.'} = {type: 'pant', quantity: 10}; // company = 'abc ltd.'
const {company = 'abc ltd.'} = {type: 'pant', quantity: 10, company: 'sara'}; // company = 'sara'
// Name Alias
const { price: productPrice } = {type: 'pant', price: 600}; // price = undefined, productPrice = 600