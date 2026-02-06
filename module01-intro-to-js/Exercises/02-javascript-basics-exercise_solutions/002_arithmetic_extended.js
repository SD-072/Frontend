// You can work here or download the template!
// 1. Addition with mixed types
let num = 5;
let strNum = '3';
let additionResult = num + strNum;
console.log('Addition Result:', additionResult); // Expected: "53" because string + number = string concatenation

// 2. Subtraction with mixed types
let subtractionResult = num - strNum;
console.log('Subtraction Result:', subtractionResult); // Expected: 2 because JavaScript converts string to number in subtraction

// 3. Multiplication with a string
let multiplicationResult = strNum * 2;
console.log('Multiplication Result:', multiplicationResult); // Expected: 6

// 4. Division by a string
let divisionResult = 10 / strNum;
console.log('Division Result:', divisionResult); // Expected: 3.333...

// 5. Modulus operation
let num2 = 10;
let modulusResult = num2 % num;
console.log('Modulus Result with Numbers:', modulusResult); // Expected: 0
modulusResult = num2 % strNum;
console.log('Modulus Result with String:', modulusResult); // Expected: 1 because '3' is converted to 3
// 6. Numeric operations
let a = 8;
let b = 3;
let c = 10;

// Addition of numbers
let sum = a + b + c;
console.log('Addition of Numbers:', sum); // Expected: 21

// Subtraction of numbers
let difference = a - b - c;
console.log('Subtraction of Numbers:', difference); // Expected: -5

// Multiplication of numbers
let product = a * b * c;
console.log('Multiplication of Numbers:', product); // Expected: 240

// Division of numbers
let quotient = c / a;
console.log('Division of Numbers:', quotient); // Expected: 1.25

// Modulus of numbers
let remainder = c % a;
console.log('Modulus of Numbers:', remainder); // Expected: 2

// More complex expression involving all operations
let complexExpression = ((a + b) * c) / b - (a % b);
console.log('Complex Expression Result:', complexExpression); // Calculate and discuss the expected result

// 7. Operation resulting in NaN
let text = 'hello';
let nanResult = text * 5;
console.log('Result of "hello" * 5:', nanResult); // Expected: NaN
console.log('Is the result NaN?', isNaN(nanResult)); // Expected: true
