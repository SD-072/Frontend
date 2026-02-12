// You can work here or download the template!
// # 01. Initialize an Array of Numbers
const numbers = [1, 2, 3, 4, 5];

// # 02. Use the map Method to Create a New Array with Doubled Values
const doubledNumbers = numbers.map((e) => e * 2);

console.log(doubledNumbers);

// # 03. Use the map Method to Create a New Array of Strings
const stringNumbers = numbers.map((num) => `Number: ${num}`);
console.log(stringNumbers);

// # 04. Use the `map` Method to Create a New Array of Objects

const numberObjects = numbers.map((num) => ({
  original: num,
  squared: num * num,
}));

// const numberObjects2 = numbers.map((num) => {
//   return {
//     original: num,
//     squared: num * num,
//   };
// });

console.log(numberObjects);

// [
//     {original: num, squared: num*num}
//     {original: num, squared: num*num}
//     {original: num, squared: num*num}
//     {original: num, squared: num*num}
// ]

// ! CHALLENGE: Product Price Calculator
// * Real-world scenario: Apply discount to product prices
const productPrices = [29.99, 15.5, 89.99, 45.0];
const discountPercent = 20;

const discountedPrices = productPrices.map((price) => {
  const discount = price * (discountPercent / 100);
  return Math.round((price - discount) * 100) / 100;
});

console.log(`Price after ${discountPercent}% discount: `, discountedPrices);
