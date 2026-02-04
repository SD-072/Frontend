document.querySelector("h1").textContent = "Manipulated with JavaScript";

// What is this?

/* Multi Line
asdf
asdf
Comments */

// # VARIABLES
let result = 20 + 5;
// console.log(result);

const constVar = "I'm the paradoxical constant variable";

var imOld = "Don't use me!";

// # DATATYPES
result = "25";
// console.log(result);
// console.log(typeof result);

// constVar = "Something new";

// # OBJECTS: Collection of properties
let car = { make: "Toyota", model: "Corolla", year: 2005 };

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
};
// console.log("Object: ", person);

// * Another kind of Object: Array
// let fruits = ["Banana", "Apple", "Orange", 25];
// console.log(fruits);

// # Arithmetic
// let num = 3;
// num++;
// console.log(`num:${num}`);
// // Expected output: "num:4,"

// // num = num + 7;
// num += 7;
// console.log(num);

// * --- FUN FACT ---
let num = 5;

let strNum = "3";
// console.log(num + strNum); // 5 + "3" = 53
// console.log(num - strNum); // 5 - "3" = 2
// console.log(strNum * 2);
// console.log(10 / strNum);

// # Comparisons
// # & type coercion - here we convert values to boolean: true of false
// console.log(10 === "10"); // false
// // console.log(0 == false); // true
// console.log(0 === false); // false

// // * logical AND
// console.log(10 === "10" && 0 === false); // false
// console.log(10 === "10" && 0 === 0); // false
// console.log(10 === 10 && 0 === 0); // true

// // * logical OR - at least ONE must be true
// console.log(10 === "10" || 0 === false); // false
// console.log(10 === "10" || 0 === 0); // true
// console.log(10 === 10 || 0 === 0); // true

// * logical NOT
// console.log(true); // true
// console.log(!true); // false

// // 0 is falsy
// // any other number is truthy
// // 10 is truthy to "10"
// // null is falsy
// // undefined is falsy

// console.log(!0); // true
// console.log(!1); // false
// console.log(!-3); // false

// console.log(!null); // true
// console.log(!undefined); //true

// # Conditionals & Scope
// * if statements

// let weatherToday;
// let temp = 21;
// const imLocal = "I'm a tourist!";

// if (temp >= 20) {
//   weatherToday = "toasty";
//   const imALocal = "I'm not a tourist!";
//   console.log("local const: ", imALocal);
//   console.log("global const: ", imLocal);
// }

// // console.log(weatherToday);
// console.log("global const: ", imLocal);

// * if-else
// let weatherToday;
// let temp = 18;

// if (temp >= 20) {
//   weatherToday = "toasty";
// } else {
//   weatherToday = " a bit chilly";
// }

// console.log(weatherToday);

let isPlayTime = true; // camelCase

// if (isPlayTime === true) {
// if (isPlayTime) {
//   console.log("Yay! Time to play!");
// } else {
//   console.log(" Oh no, I have to work :(");
// }

// * ternary operator - if-else in a single line
// isPlayTime ? console.log("Yay! Time to play!") : console.log(" Oh no, I have to work :(");

let isLoggedIn = false;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";

// console.log(message);

// * if-else-if
let weatherToday;
let temp = 20;

if (temp >= 20) {
  weatherToday = "toasty";
} else if (temp >= 10 && temp < 20) {
  weatherToday = "a bit chilly";
} else {
  weatherToday = "uncertain";
}

// console.log("The weather today is " + weatherToday + ".");
// console.log(`The weather today is ${weatherToday}.`); // backticks: template literal

// * Switch statements ===
// const charClass = "sorcerer";

// switch (charClass) {
//   case "fighter":
//     console.log("I'm very stratetic");
//     break;
//   case "monk":
//     console.log("I fight with my fists!");
//     break;
//   case "wizard":
//     console.log("I get my magic from books!");
//     break;
//   case "sorcerer":
//   case "warlock":
//     console.log("I can do powerful magic!");
//     break;
//   default:
//     console.log("I love DnD");
// }

// # Functions
// * Function declaration, can be hoisted
// sayHelloWorld();

function sayHelloWorld() {
  console.log("Hello world!");
}

function writeMessage() {
  console.log("I happen when writeMessage() is called!");
  return "Hello world!";
}

// const myMessage = writeMessage();
// myMessage = "Hello world!"
// console.log(myMessage);

// * Function expression
const goodByeWorld = function () {
  console.log("Goodbye awesome world!");
};

// goodByeWorld();

// * Arrow function
const sudoMakeMeASandwich = () => {
  console.log("Here's your sandwich");
};

// sudoMakeMeASandwich();

// * Parameter (variables/chicken) & arguments
// const square = (num) => {
//   return num * num;
// };
const square = (num) => num * num;

// console.log(square(2));
// console.log(square(99));
// console.log(square(9932e95));

const multiply = (numA, numB) => {
  return numA * numB;
};

const multNum = multiply(5, 6);
// console.log(multNum);

// # LOOPS
// # Loops execute a block of code multiple times

// * ---- For Loop ----
// for (initialization; condition; increment/decrement) {
//     // code to be executed repeatedly
// }

// for (let i = 0; i < 5; i = i + 2) {
//   console.log(i);
// }

// ---- Break and Continue ----
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     continue; // skip the rest of the loop when i is 2
//   }
//   if (i === 5) {
//     break; // exists the loop, when i is 5
//   }
//   console.log(i);
// }

// * ---- While Loop ----
// while (condition) {
//     // code to be executed repeatedly
// }

let i = 0;

// //  while (i === 0) // -> infinit loop
while (i < 0) {
  console.log(i);
  i++;
}

// * ---- Do-While Loop ----
// do {
//     // code to be executed repeatedly
// } while (condition);

// i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 0);

// * ----  for...of loop ----
// for (variable of iterable) {
//   // code to be executed for each element/character
// }
const fruits = ["Banana", "Apple", "Orange"];
console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (const chicken of fruits) {
//   console.log(chicken);
// }

const myString = "hello";

for (const stegosaurus of myString) {
  console.log(stegosaurus);
}
