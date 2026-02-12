// # 01. Initialize an Array of Numbers
const numbers = [1, 2, 3, 4, 5];

// # 02. Use the forEach Method to Print Each Number
numbers.forEach((number) => console.log(number));

// # 03. Use the forEach Method to Calculate the Sum of the Numbers

let sum = 0;
numbers.forEach((number) => (sum += number));
console.log("Sum: ", sum);

// # 04. Use the forEach Method to Create a New Array with Squared Values

const squaredNumbers = [];
numbers.forEach((number) => squaredNumbers.push(number * number));

console.log(numbers);
console.log(squaredNumbers);
