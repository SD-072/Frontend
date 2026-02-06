// Part 1: Function Declarations

// 1. Declare a function with no parameters that outputs something to the console
function greet() {
  console.log("Hello, World!");
}

// Call the function
greet(); // Output: Hello, World!

// 2. Declare a function with one parameter that returns something
function square(number) {
  return number * number;
  // return number ** 2;
  // return Math.pow(number, 2);
}

// Call the function and store the result
let resultSquare = square(5);

// Output the result to the console
console.log(resultSquare); // Output: 25

// 3. Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly
function getDayName(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number";
  }
  return dayName;
}

// Call the function and store the result
let resultDayName = getDayName(3);

// Output the result to the console
console.log(resultDayName); // Output: Wednesday

// Part 2: Function Expressions

// 1. Function expression with no parameters
const greetExpression = function () {
  console.log("Hello again, World!");
};

// Call the function
greetExpression(); // Output: Hello again, World!

// 2. Function expression with one parameter
const squareExpression = function (number) {
  return number * number;
};

// Call the function and store the result
let resultSquareExpression = squareExpression(5);

// Output the result to the console
console.log(resultSquareExpression); // Output: 25

// 3. Function expression with one parameter and a switch statement
const getDayNameExpression = function (dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number";
  }
  return dayName;
};

// Call the function and store the result
let resultDayNameExpression = getDayNameExpression(3);

// Output the result to the console
console.log(resultDayNameExpression); // Output: Wednesday

// Alternative:
const getDayNameExpression2 = function (dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day number";
  }
};

const anotherDayName = getDayNameExpression2(5);
console.log("Day 5 is:", anotherDayName); // Friday

/* Discussion:
 - Function declarations are hoisted...
 - Function expressions are not hoisted...

 Try uncommenting the line below to see the error! */
// callExpressionBeforeDefined(); // Throws ReferenceError: Cannot access 'callExpressionBeforeDefined' before initialization

// const callExpressionBeforeDefined = function() {
//   console.log("This will not work if called before definition.");
//   };
