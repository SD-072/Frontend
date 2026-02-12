// ============================================================================
// * TASK 1: Declare two variables, one with const and one with let
// * Give each one any value you'd like (string, number, array, object, boolean)
// ============================================================================

// ! const = immutable variable (cannot be reassigned)
const studentName = "Max Mustermann";

// ! let = mutable variable (can be reassigned)
let studentAge = 22;

// ? Output the values to the console
console.log(studentName); // Output: Max Mustermann
console.log(studentAge); // Output: 22

// ============================================================================
// * TASK 2: Log the values of each one of them to the console
// ============================================================================

// # Show different data types
const hobbies = ["Reading", "Sports", "Cooking"]; // Array
const student = { name: "Anna", age: 23 }; // Object
let isStudent = true; // Boolean

console.log(hobbies); // Output: ["Reading", "Sports", "Cooking"]
console.log(student); // Output: { name: "Anna", age: 23 }
console.log(isStudent); // Output: true

// ============================================================================
// * TASK 3: Create an ES5 function (function keyword) with no parameters that prints a string to the console. Then call it.
// ============================================================================

// ! ES5 Syntax: Uses the 'function' keyword
function printGreeting() {
  console.log("Hello, welcome to the JavaScript course!");
}

// ? Function call
printGreeting(); // Output: Hello, welcome to the JavaScript course!

// ============================================================================
// * TASK 4: Create an ES5 function that takes 2 parameters and **RETURNS** a string that includes those 2 parameters using template literal. Then log the value of that function to the console.
// ============================================================================

// ! This function RETURNS a value (return statement)
function createGreeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to see you!`;
}

// ? The function returns a string, which we then log
const greeting = createGreeting("Max", "Mueller");
console.log(greeting); // Output: Hello Max Mueller, nice to see you!

// ============================================================================
// * TASK 5: Transform the 2 ES5 functions from the previous exercises into ES6 arrow functions.
// ============================================================================

// ! Arrow Function without parameters
// * Syntax: const functionName = () => { ... }
const printGreetingArrow = () => {
  console.log("Hello, welcome to the JavaScript course!");
};

printGreetingArrow(); // Output: Hello, welcome to the JavaScript course!

// ! Arrow Function with 2 parameters
const createGreetingArrow = (firstName, lastName) => {
  return `Hello ${firstName} ${lastName}, nice to see you!`;
};

// # Even shorter syntax (implicit return):
const createGreetingShort = (firstName, lastName) =>
  `Hello ${firstName} ${lastName}, nice to see you!`;

console.log(createGreetingArrow("Anna", "Schmidt"));
// Output: Hello Anna Schmidt, nice to see you!

// ============================================================================
// * TASK 6: Create an array containing 5 elements.
// ============================================================================

const fruits = ["Apple", "Banana", "Orange", "Strawberry", "Kiwi"];

// ============================================================================
// * TASK 7: Log the first 2 values to the console
// ============================================================================

// ! Array indices start at 0
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// ============================================================================
// * TASK 8: Log the last element in the array to the console
// ============================================================================

// * Method 1: Direct access with index
console.log(fruits[4]); // Output: Kiwi

// # Method 2: Dynamically with array.length (better!)
// ! fruits.length returns the number of elements (5),
// ! but the last index is 4 (that's why we subtract 1)
console.log(fruits[fruits.length - 1]); // Output: Kiwi

// ============================================================================
// * TASK 9: Log elements 3 and 4 in the array to the console
// ============================================================================

// ! Index 2 = 3rd element, Index 3 = 4th element
console.log(fruits[2]); // Output: Orange
console.log(fruits[3]); // Output: Strawberry

// ============================================================================
// * TASK 10: Create an object with the keys "name", "age", "occupation" and "hobbies" (hobbies should be an array)
// ============================================================================

const person = {
  name: "Lisa Meyer",
  age: 25,
  occupation: "Software Developer",
  // ! hobbies is an array inside the object
  hobbies: ["Programming", "Hiking", "Photography", "Reading"],
};

// ============================================================================
// * TASK 11: Log the name to the console
// ============================================================================

// * Access object properties with dot notation
console.log(person.name); // Output: Lisa Meyer

// ============================================================================
// * TASK 12: Log the occupation and age to the console
// ============================================================================

console.log(person.occupation); // Output: Software Developer
console.log(person.age); // Output: 25

// ============================================================================
// * TASK 13: Log all the hobbies to the console
// ============================================================================

// ? This outputs the entire array
console.log(person.hobbies);
// Output: ["Programming", "Hiking", "Photography", "Reading"]

// ============================================================================
// * TASK 14: Log only the first hobby to the console
// ============================================================================

// ! Combined access: First access the object, then the array
console.log(person.hobbies[0]); // Output: Programming

// ============================================================================
// * TASK 15: Create an array containing 3 objects. The objects should have the same keys as the one in the previous exercise
// ============================================================================

const people = [
  {
    name: "Tom Fischer",
    age: 28,
    occupation: "Designer",
    hobbies: ["Drawing", "Gaming", "Cooking"],
  },
  {
    name: "Sarah Klein",
    age: 30,
    occupation: "Teacher",
    hobbies: ["Yoga", "Traveling", "Baking"],
  },
  {
    name: "Daniel Weber",
    age: 26,
    occupation: "Data Analyst",
    hobbies: ["Basketball", "Movies", "Music"],
  },
];

// ============================================================================
// * TASK 16: Loop through the array of objects and log all the names to the console
// ============================================================================

// # Method 1: Classic for loop
console.log("--- Method 1: for loop ---");

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
// Output: Tom Fischer
//         Sarah Klein
//         Daniel Weber

// # Method 2: for...of loop (more modern and readable)
console.log("--- Method 2: for...of ---");

for (const person of people) {
  console.log(person.name);
}

// # Method 3: forEach (functional approach)
console.log("--- Method 3: forEach ---");

people.forEach(function (person) {
  console.log(person.name);
});

// # Method 4: forEach with Arrow Function (shortest)
console.log("--- Method 4: forEach with Arrow Function ---");

people.forEach((person) => console.log(person.name));

// ============================================================================
// ! BONUS: Output all names in a nice format
// ============================================================================
console.log("\n--- BONUS: Formatted Output ---");

people.forEach((person, index) => {
  console.log(`${index + 1}. ${person.name} - ${person.age} years old - ${person.occupation}`);
});
// Output: 1. Tom Fischer - 28 years old - Designer
//         2. Sarah Klein - 30 years old - Teacher
//         3. Daniel Weber - 26 years old - Data Analyst
