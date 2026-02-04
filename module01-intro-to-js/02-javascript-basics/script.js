// ==========================================
// JAVASCRIPT BASICS TUTORIAL
// ==========================================

// This script covers essential JavaScript concepts.
// Each section includes simple examples to help understand the fundamentals.

// ==========================================
// JAVASCRIPT SYNTAX ESSENTIALS
// ==========================================

// JavaScript syntax consists of:
// - Literals: Fixed values written directly in code (e.g., numbers, strings)
// - Variables: Containers for storing data values
// - Operators: Symbols that perform operations
// - Expressions: Combinations of values, variables, and operators
// - Keywords: Reserved words with special meanings
// - Comments: Notes in code that are ignored by the JavaScript engine

console.info("JAVASCRIPT SYNTAX ESSENTIALS");
// Example of JavaScript syntax:
let result = 10 + 1; // Expression using literals, variables, and operators
console.log(result); // Outputs: 11

// ==========================================
// VARIABLES
// ==========================================

// Variables are containers for storing data values. In JavaScript, you can declare variables using:
// - let: For values that can change
// - const: For values that cannot be reassigned
// - var: Older way to declare variables (not recommended)

console.info("VARIABLES");

// Using let (can be reassigned)
let score = 10 + 1;
console.log(score); // Outputs: 11
score = 20; // Reassigning
console.log(score); // Outputs: 20

// Using const (cannot be reassigned)
const myConst = "This is a const!";
console.log(myConst);
// myConst = "Something else!";  // This would cause an error

// Using var (not recommended)
// var dontUseVar = ":(";

// ==========================================
// DATA TYPES
// ==========================================

// JavaScript has several built-in data types:
// - Number: For numeric values
// - String: For text values
// - Boolean: For true/false values
// - Object: For complex data structures
// - Undefined: For variables that have been declared but not assigned
// - Null: For intentional absence of value

console.info("DATA TYPES");

// Examples of different data types
let number = 42; // Number
let text = "Hello"; // String
let isTrue = true; // Boolean
let person = { name: "John", age: 30 }; // Object
let notDefined; // Undefined
let empty = null; // Null

// Check type with typeof
console.log(typeof number); // Outputs: "number"
console.log(typeof text); // Outputs: "string"
console.log(typeof isTrue); // Outputs: "boolean"
console.log(typeof person); // Outputs: "object"
console.log(typeof notDefined); // Outputs: "undefined"
console.log(typeof empty); // Outputs: "object" ("weird" JavaScript behavior)

// ==========================================
// OPERATORS
// ==========================================

// ---- Arithmetic Operators ----
// + Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulus (remainder)
// ++ Increment
// -- Decrement

console.info("OPERATORS - Arithmetic");

// Examples of arithmetic operators
result = 10 * 2; // Multiplication
console.log(result); // Outputs: 20

let counter = 1;
counter++; // Increment
console.log(counter); // Outputs: 2
counter--; // Decrement
console.log(counter); // Outputs: 1

// ---- Assignment Operators ----
// = Assigns value
// += Add and assign
// -= Subtract and assign
// *= Multiply and assign
// /= Divide and assign

console.info("OPERATORS - Assignment");

// Examples of assignment operators
let x = 10;
x += 5; // Same as x = x + 5
console.log(x); // Outputs: 15

// ==========================================
// EXPRESSIONS
// ==========================================

// Expressions are combinations of values, variables, and operators that compute to a value.

console.info("EXPRESSIONS");

// Examples of expressions
let sum = 10 + 1; // Expression that computes to 11

// ==========================================
// KEYWORDS
// ==========================================

// JavaScript has reserved words with special meanings that cannot be used as variable names:
// - let, const, var: For declaring variables
// - if, else, switch: For control flow
// - function, return: For functions
// - try, catch: For error handling
// - for, while, do: For loops
// - break, continue: For loop control

console.info("KEYWORDS");

// ==========================================
// COMMENTS
// ==========================================

console.info("COMMENTS");

// This is a single-line comment

/* This is a
   multi-line comment */

// ==========================================
// IDENTIFIERS
// ==========================================

// Identifiers are names given to variables, functions, etc. Rules:
// - Must start with a letter, underscore (_), or dollar sign ($)
// - Subsequent characters can include digits (0-9)
// - Are case-sensitive
// - Cannot be reserved keywords

console.info("IDENTIFIERS");

// JavaScript commonly uses camelCase for identifiers:
let myVariable; // Good: camelCase
let MyVariable; // Not recommended: PascalCase
let my_variable; // Not recommended: snake_case

// ==============================================================================
// JAVASCRIPT BASICS: A GUIDED TOUR FOR STUDENTS
// ==============================================================================

// This script is designed to introduce fundamental JavaScript concepts.
// Each section includes explanations and examples to illustrate core principles.

// ==============================================================================
// SECTION 1: INTRODUCTION TO COMMENTS AND BASIC OUTPUT
// ==============================================================================

// Comments are crucial for explaining your code. The JavaScript engine ignores them.

// Single-line comment: Used for short explanations.
/*
  Multi-line comment:
  Used for more extensive explanations
  that span several lines.
*/

// console.log(): A fundamental function to print output to the browser's console
// or Node.js terminal. It's invaluable for debugging and understanding code flow.
console.log("--- SECTION 1: Basic Output ---");
console.log(20 + 5); // This will print the result of the addition (25) to the console.

// ==============================================================================
// SECTION 2: VARIABLES - STORING AND MANAGING DATA
// ==============================================================================

// Variables are named containers for storing data. JavaScript offers three keywords
// for declaring variables, each with different scopes and mutability.

console.log("\n--- SECTION 2: Variables ---");

// 2.1 `let`: Block-scoped variable, can be reassigned.
// This is the preferred way to declare variables whose values might change.
let result2 = 20 + 5; // Declare 'result2' and initialize it with 25.
console.log("`let` variable `result2` (initial):", result2); // Output: 25

result2 = 30; // 'result2' can be reassigned to a new value.
console.log("`let` variable `result2` (reassigned):", result2); // Output: 30

// 2.2 `const`: Block-scoped constant, cannot be reassigned after initialization.
// Use `const` for values that should not change throughout the program's execution.
const constVar = "I'm the paradoxical constant variable";
console.log("`const` variable `constVar`:", constVar);

// constVar = 'Something new'; // Uncommenting this line would cause a TypeError,
//                              // as `const` variables cannot be reassigned.
// console.log(constVar);

// 2.3 `var`: Function-scoped variable (older keyword, generally not recommended).
// `var` has more complex hoisting and scoping rules that can lead to confusion.
// Modern JavaScript development prefers `let` and `const`.
var imOld = "Don't use me!";
console.log("`var` variable `imOld`:", imOld);

// ==============================================================================
// SECTION 3: DATA TYPES - CATEGORIZING INFORMATION
// ==============================================================================

// JavaScript is a dynamically typed language, meaning variable types are determined
// at runtime. Here are some primitive data types and an introduction to objects/arrays.

console.log("\n--- SECTION 3: Data Types ---");

// 3.1 `Number`: Represents both integer and floating-point numbers.
result = 25; // `result` now holds a number.
console.log("`result` as a Number:", result);
console.log("Type of `result` (Number):", typeof result); // `typeof` operator returns the type of a variable.

// 3.2 `String`: Represents sequences of characters (text).
result = "25"; // `result` now holds a string. Note the quotes!
console.log("`result` as a String:", result);
console.log("Type of `result` (String):", typeof result);

// 3.3 `Object`: A collection of key-value pairs (properties).
// Objects are used to store more complex, structured data.
let car = {
  make: "Toyota", // 'make' is a key, 'Toyota' is its value
  model: "Corolla",
  year: 2005,
};
console.log("`car` object:", car); // Output the entire object
console.log("Accessing object property `car.make`:", car.make); // Accessing a specific property

// 3.4 `Array`: An ordered list of values.
// Arrays are a special type of object, useful for storing collections of items.
let fruits = ["Banana", "Apple", "Orange", 25]; // An array can hold different data types.
console.log("`fruits` array:", fruits);
console.log("Accessing array element `fruits[0]`:", fruits[0]); // Arrays are zero-indexed.
console.log("Type of `fruits` (Array):", typeof fruits); // Arrays are technically objects.

// ==============================================================================
// SECTION 4: ARITHMETIC OPERATORS - PERFORMING CALCULATIONS
// ==============================================================================

// Arithmetic operators are used to perform mathematical calculations.

console.log("\n--- SECTION 4: Arithmetic Operators ---");

let num = 1;
console.log("Initial `num`:", num);

// 4.1 Increment (++) and Decrement (--) Operators:
// `num++` (post-increment): Uses the current value of `num`, then increments it.
// `++num` (pre-increment): Increments `num`, then uses the new value.
num++; // Equivalent to `num = num + 1`; `num` becomes 2.
console.log("After `num++`:", num); // Output: 2

// num--; // Equivalent to `num = num - 1`; `num` becomes 1.
// console.log('After `num--`:', num);

// 4.2 Compound Assignment Operators:
// These combine an arithmetic operation with an assignment.
num += 7; // Equivalent to `num = num + 7`; `num` becomes 2 + 7 = 9.
console.log("After `num += 7` (addition assignment):", num); // Output: 9

// Other compound operators: -=, *=, /=, %=

// ==============================================================================
// SECTION 5: COMPARISON OPERATORS - EVALUATING RELATIONSHIPS
// ==============================================================================

// Comparison operators compare two values and return a boolean (`true` or `false`).

console.log("\n--- SECTION 5: Comparison Operators ---");

// 5.1 Loose Equality (`==`): Compares values after type coercion (converting types).
console.log("`10 == '10'` (loose equality):", 10 == "10"); // true (string '10' is coerced to number 10)

// 5.2 Strict Equality (`===`): Compares values AND data types, no type coercion.
// This is generally preferred to avoid unexpected behavior due to type coercion.
console.log("`10 === '10'` (strict equality):", 10 === "10"); // false (number vs. string)
console.log("`0 === false` (strict equality):", 0 === false); // false (number vs. boolean)

// ==============================================================================
// SECTION 6: LOGICAL OPERATORS - COMBINING CONDITIONS
// ==============================================================================

// Logical operators combine boolean expressions and return a boolean result.

console.log("\n--- SECTION 6: Logical Operators ---");

// 6.1 Logical AND (`&&`): Returns `true` if ALL operands are `true`.
console.log("`10 === '10' && 0 === false`:", 10 === "10" && 0 === false); // false && false = false
console.log("`10 === 10 && 0 === 0`:", 10 === 10 && 0 === 0); // true && true = true

// 6.2 Logical OR (`||`): Returns `true` if AT LEAST ONE operand is `true`.
console.log("`10 === 10 || 0 === 0`:", 10 === 10 || 0 === 0); // true || true = true
console.log("`10 === '10' || 0 === 0`:", 10 === "10" || 0 === 0); // false || true = true
console.log("`10 === '10' || 0 === false`:", 10 === "10" || 0 === false); // false || false = false

// 6.3 Logical NOT (`!`): Reverses the boolean value of an operand.
console.log("`!true`:", !true); // false
console.log("`!false`:", !false); // true

// `!` also performs type coercion to boolean (truthy/falsy values):
// Falsy values: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.
// All other values are truthy.
console.log("`!0` (0 is falsy):", !0); // true
console.log("`!1` (1 is truthy):", !1); // false
console.log("`!-3` (-3 is truthy):", !-3); // false
console.log("`!null` (null is falsy):", !null); // true
console.log("`!undefined` (undefined is falsy):", !undefined); // true

// ==============================================================================
// SECTION 7: CONDITIONALS - CONTROLLING CODE FLOW
// ==============================================================================

// Conditionals allow your program to make decisions and execute different
// blocks of code based on whether certain conditions are met.

console.log("\n--- SECTION 7: Conditionals ---");

// 7.1 `if` Statement: Executes code if a condition is `true`.
// `let` and `const` variables declared inside `if` blocks (or any `{}` block)
// are block-scoped, meaning they are only accessible within that block.
console.log("--- If Statement ---");
let weatherToday;
let temp = 50; // Example temperature in some unit (e.g., Fahrenheit)
const imALocal = "I'm a global constant!"; // This is accessible everywhere

if (temp >= 20) {
  // This code block executes if `temp` is 20 or greater.
  const imLocal = "I'm a local constant!"; // This is block-scoped to this `if` block.
  weatherToday = "toasty";
  console.log("Inside `if` block - `imLocal`:", imLocal);
}

console.log("Outside `if` block - `imALocal`:", imALocal); // Accessible.
console.log("`weatherToday` after `if`:", weatherToday); // Output: toasty

// console.log(imLocal); // Uncommenting this would cause a ReferenceError,
//                        // as `imLocal` is not defined outside its block.

// 7.2 `if-else` Statement: Provides an alternative block of code to execute.
console.log("--- If-Else Statement ---");
let isPlaytime = true; // Use `camelCase` for variable names (common JS convention).

if (isPlaytime) {
  // `if (isPlaytime === true)` can be simplified to `if (isPlaytime)`
  console.log("Yay! Time to play!");
} else {
  console.log("Oh no, I have to work :(");
}

// 7.3 Ternary Operator (Conditional Operator): A concise `if-else` for simple conditions.
// Syntax: `condition ? expressionIfTrue : expressionIfFalse;`
console.log("--- Ternary Operator ---");
isPlaytime ? console.log("Yay! Time to play!") : console.log("Oh no, I have to work :(");

// 7.4 `if-else-if` Ladder: For handling multiple conditions sequentially.
console.log("--- If-Else-If Ladder ---");
temp = 12; // Let's re-evaluate temperature.

if (temp >= 20) {
  weatherToday = "toasty";
} else if (temp >= 10 && temp < 20) {
  // If first condition is false, check this one.
  weatherToday = "a bit chilly";
} else {
  // If none of the above conditions are true, this block executes.
  weatherToday = "uncertain";
}

// Traditional string concatenation:
// console.log('The weather today is ' + weatherToday + '.');

// Template Literals (using backticks ``): A modern way to embed expressions within strings.
console.log(`The weather today is ${weatherToday}.`); // Output: The weather today is a bit chilly.

// 7.5 `switch` Statement: For handling multiple possible values of a single variable.
// It provides a more readable alternative to a long `if-else-if` chain for specific values.
console.log("--- Switch Statement ---");
const charClass = "paladin";

switch (charClass) {
  case "fighter": // If `charClass` is 'fighter'
    console.log("I'm very strategic!");
    break; // `break` is essential to exit the switch statement; otherwise, execution "falls through" to the next case.
  case "monk": // If `charClass` is 'monk'
    console.log("I fight with my fists!");
    break;
  case "wizard": // If `charClass` is 'wizard'
    console.log("I get my magic from books!");
    break;
  case "sorcerer": // Multiple cases can share the same code block.
  case "warlock":
    console.log("I can do powerful magic!");
    break;
  default: // If `charClass` does not match any `case` value.
    console.log("I love DnD!"); // Output for 'paladin'
}

// ==============================================================================
// SECTION 8: FUNCTIONS - REUSABLE BLOCKS OF CODE
// ==============================================================================

// Functions are fundamental building blocks that allow you to encapsulate and
// reuse code. They promote modularity and organization.

console.log("\n--- SECTION 8: Functions ---");

// 8.1 Function Declaration (Hoisted):
// Functions declared this way are "hoisted" to the top of their scope, meaning
// they can be called before their actual declaration in the code.
console.log("--- Function Declaration (Hoisted) ---");
sayHelloWorld(); // This call works because `sayHelloWorld` is hoisted.

function sayHelloWorld() {
  console.log("Hello world!");
}

// Functions can also return values using the `return` keyword.
function writeMessage() {
  return "Hello world from `writeMessage`!"; // Returns a string.
}

const myMessage = writeMessage(); // The returned value is stored in `myMessage`.
console.log("`myMessage` from `writeMessage`:", myMessage);

// 8.2 Function Expression:
// Functions assigned to a variable are not hoisted in the same way;
// they can only be called after their declaration.
console.log("--- Function Expression ---");
const goodByWorld = function () {
  console.log("Goodbye awesome world!");
};

goodByWorld(); // Call the function expression.

// 8.3 Arrow Functions (ES6+):
// A more concise syntax for writing functions, especially useful for short functions.
// They also handle the `this` keyword differently (lexical `this`), which is
// an advanced topic for later.
console.log("--- Arrow Functions ---");
const sudoMakeMeASandwich = () => {
  console.log("Here's your sandwich!");
};

sudoMakeMeASandwich();

// 8.4 Parameters and Arguments:
// Parameters are placeholders defined in the function signature.
// Arguments are the actual values passed to the function when it's called.
console.log("--- Function Parameters and Arguments ---");

// Function taking one parameter.
const squareNum = (parameter) => {
  // `parameter` is a placeholder.
  return parameter * parameter;
};
// Concise arrow function for single-expression body: `const squareNum = (parameter) => parameter * parameter;`

const squaredNum = squareNum(8); // `8` is the argument passed to `parameter`.
console.log("`squaredNum` (8 squared):", squaredNum); // Output: 64

// Example of `NaN` (Not a Number) if a non-numeric argument is passed and used in arithmetic:
// const squaredNum = squareNum('eight'); // This would result in `NaN` (Not a Number)
// console.log('`squaredNum` ("eight" squared):', squaredNum);

// Function taking multiple parameters.
const multiply = (parameter1, parameter2) => {
  return parameter1 * parameter2;
};

const multNum = multiply(5, 6); // Passing 5 and 6 as arguments.
console.log("`multNum` (5 * 6):", multNum); // Output: 30

// ==============================================================================
// SECTION 9: LOOPS - REPEATING CODE EXECUTION
// ==============================================================================

// Loops are used to execute a block of code repeatedly until a certain condition is met.

console.log("\n--- SECTION 9: Loops ---");

// 9.1 `for` Loop: The most common loop, ideal when you know the number of iterations.
/*
  Syntax:
  for (initialization; condition; increment/decrement) {
    // code to be executed in each iteration
  }
*/
console.log("--- For Loop ---");
for (let i = 0; i < 5; i++) {
  // `i` starts at 0, continues as long as `i < 5`, increments `i` by 1 after each iteration.
  console.log("For loop iteration:", i); // Outputs 0, 1, 2, 3, 4
}

// `break` statement: Terminates the loop immediately.
console.log("--- For Loop with `break` ---");
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("Breaking loop at i = 5");
    break; // Loop stops when `i` reaches 5.
  }
  console.log("For loop with break, i:", i); // Outputs 0, 1, 2, 3, 4
}

// `continue` statement: Skips the current iteration and moves to the next one.
console.log("--- For Loop with `continue` ---");
for (let i = 0; i < 5; i++) {
  if (i == 2) {
    console.log("Continuing loop, skipping i = 2");
    continue; // Skips console.log(i) for `i = 2`.
  }
  console.log("For loop with continue, i:", i); // Outputs 0, 1, 3, 4
}

// 9.2 `while` Loop: Executes code as long as a condition is `true`.
// Be careful to include a way for the condition to eventually become false,
// or you'll create an infinite loop!
/*
  Syntax:
  while (condition) {
    // code to be executed
  }
*/
console.log("--- While Loop ---");
let i = 0; // Initialize counter outside the loop.
while (i < 5) {
  // Loop as long as `i` is less than 5.
  console.log("While loop iteration:", i);
  i++; // Crucially, increment `i` to ensure the loop eventually terminates.
} // Outputs 0, 1, 2, 3, 4

// 9.3 `do-while` Loop: Similar to `while`, but guarantees at least one execution.
/*
  Syntax:
  do {
    // code to be executed
  } while (condition);
*/
console.log("--- Do-While Loop ---");
i = 0; // Reset `i` for this loop.
do {
  console.log("Do-While loop iteration:", i); // This code always runs at least once.
  i++;
} while (i < 5); // Condition checked AFTER the first execution.
// Outputs 0, 1, 2, 3, 4 (even if `i` was initially 5, it would still run once).

// 9.4 `for...of` Loop: Iterates over iterable objects (like arrays, strings, maps, sets).
// It's a convenient way to access the values of elements directly.
console.log("--- For...of Loop ---");
let fruits2 = ["Banana", "Apple", "Orange", 25];

// Traditional `for` loop for arrays (accessing by index):
console.log("Iterating with traditional `for` loop:");
for (let j = 0; j < fruits2.length; j++) {
  console.log(fruits2[j]);
}

// `for...of` loop (accessing by value):
console.log("Iterating with `for...of` loop:");
for (const fruit of fruits2) {
  // `fruit` directly gets the value of each element.
  console.log(fruit);
}
