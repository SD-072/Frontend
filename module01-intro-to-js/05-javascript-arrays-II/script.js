// # Higher-Order Fucntions and Callback Functions

// function declaration
// function add(num1, num2) {
//   if (num1 === 0 && num2 === 0) {
//     return "Please add positive integers";
//   }
//   return num1 + num2;
//   console.log("This never runs");
// }
function add(num1, num2) {
  return (num1 + num2) * 2;
}

// console.log(add(3, 4));
// console.log(add(1, "sdf"));
// console.log(add(0, 0));

// arrow function
const shortAddArrowFunc = (num1, num2) => (num1 + num2) * 2;

// console.log(shortAddArrowFunc(4, 5));

// # Higher-Order-Functions
// * 1. A function that accepts another function as an argument (the callback function)
function higherOrderFunc(func) {
  func(); // calling the function in here
}

// This is a callback function because it's passed into another function.
function callbackFunction() {
  console.log(`Hi, I'm a regular function!`);
}

higherOrderFunc(callbackFunction);
// instead of running callbackFunction inside of higherOrderFunc, we can also directly pass an anonymous function:

higherOrderFunc(function callbackFunction(number) {
  console.log(`Hi, I'm a regular function TWO`, number);
}, 10);

higherOrderFunc(() => console.log(`Hi, I'm a regular function THREE`));

// * Passing arguments down to the callbackFunc
function higherOrderFunc(func, ...args) {
  return func(...args); // call the callback and forward any arguments
}

//  This is a callback function, because it's passed into another function
function callbackFunction(number) {
  console.log(number);
}

// WRONG: callbackFunction(5) runs immediately; its return value (undefined) gets passed in
// console.log(higherOrderFunc(callbackFunction(5)));

// Option A: pass the function, and pass the argument(s) separately
higherOrderFunc(callbackFunction, 5);

// Option B: wrap the call in another function (closure)
higherOrderFunc(() => callbackFunction(5));

// * 2. A function that returns another function
function multiplier(factor) {
  return (number) => number * factor;
}

console.log(multiplier(2));
const double = multiplier(2); // (number) => { return number * 2; };
console.log(double(3)); //  (3) => { return 3 * 2 }; resulting in 6

const triple = multiplier(3); //  (number) => { return number * 3; };
console.log(triple(4)); //  (4) => { return 4 * 3 }; resulting in 12
console.log(triple(99)); //  (9) => { return 99 * 3 }; resulting in 297

// # Higher-Order Array methods
const numbers = [1, 2, 3, 4, 5];

// forEach is a HOF, that accepts a callbackFunc
numbers.forEach(function () {});
numbers.forEach(() => {});

numbers.forEach((num) => console.log(num));

numbers.forEach((num, index) => {
  console.log(`Element at index ${index}: ${num}`);
  console.log(num * 10);
});
console.log(numbers);

numbers.forEach((num, index) => {
  numbers[index] = num * 10;
});

console.log(numbers);

// .map() - Creates a new array by transofmring every element
const variable = numbers.map(() => {}); // this one, returns a NEW array!
