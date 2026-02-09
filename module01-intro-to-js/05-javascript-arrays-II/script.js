// # Higher-Order Functions and Callback Functions

// # Function Declarations vs Arrow Functions
// * Same behavior, different syntax. Use the style that keeps code readable.
function addWithGuard(num1, num2) {
  if (num1 === 0 && num2 === 0) {
    return "Please add positive integers";
  }
  return num1 + num2;
  console.log("This never runs");
}

function add(num1, num2) {
  return (num1 + num2) * 2;
}

console.log(addWithGuard(3, 4));
console.log(addWithGuard(1, "sdf"));
console.log(addWithGuard(0, 0));
console.log(add(3, 4));

const shortAddArrowFunc = (num1, num2) => (num1 + num2) * 2;

console.log(shortAddArrowFunc(4, 5));

// # Higher-Order-Functions
// * A higher-order function either takes a function or returns one.
function higherOrderFunc(func) {
  func(); // calling the function in here
}

// This is a callback function because it's passed into another function.
function greetCallback() {
  console.log(`Hi, I'm a regular function!`);
}

higherOrderFunc(greetCallback);

// Instead of reusing the same named callback, we can pass a new one inline.
higherOrderFunc(function greetCallbackTwo() {
  console.log(`Hi, I'm a regular function TWO`);
});

higherOrderFunc(() => console.log(`Hi, I'm a regular function THREE`));

// * Passing arguments down to the callback function
function higherOrderFuncWithArgs(func, secondParameter) {
  return func(secondParameter); // call the callback and forward any arguments
}

// This is a callback function because it's passed into another function.
function numberLogger(number) {
  console.log(number);
}

// ! WRONG: calling the callback here passes its return value, not the function.
// console.log(higherOrderFuncWithArgs(numberLogger(5)));

// Option A: pass the function, and pass the argument(s) separately
higherOrderFuncWithArgs(numberLogger, 5);

// Option B: wrap the call in another function (closure)
higherOrderFuncWithArgs(() => numberLogger(5));

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

// * `forEach` is for side effects (it does not return a new array).
numbers.forEach(function () {});
numbers.forEach(() => {});

numbers.forEach((num) => console.log(num));

numbers.forEach((num, index) => {
  console.log(`Element at index ${index}: ${num}`);
  console.log(num * 10);
});

console.log(numbers);

// ! Mutating arrays inside `forEach` is allowed, but be intentional about it.
numbers.forEach((num, index) => {
  numbers[index] = num * 10;
});

console.log(numbers);

// * .map() creates a new array by transforming every element.
const doubleNumbers = numbers.map((num) => {
  return num * 2;
});

console.log("Old array: ", numbers);
console.log("New array: ", doubleNumbers);

// * Block scope to avoid variable collisions in lecture examples
{
  const people = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 30 },
    { name: "Carol", age: 35 },
    { name: "Dave", age: 20 },
  ];

  // * Transforming objects: extract and transform properties
  // Want: ["ALICE", "BOB", ...]
  const namesUppercase = people.map((person) => person.name.toUpperCase());
  console.log(namesUppercase);

  // Without map, you'd need manual iteration:
  // const person1 = people[0].name.toUpperCase()
  // const person2 = people[1].name.toUpperCase()
  // const person3 = people[2].name.toUpperCase()
  // ...

  // * Comparing .map() with .forEach()
  // ! forEach requires manual array building; map does it automatically.
  const namesUpperCaseForEach = [];
  people.forEach((person) => namesUpperCaseForEach.push(person.name.toUpperCase()));
  console.log(namesUpperCaseForEach);

  // # ...Spread Operator
  // * Spread creates shallow copies. Useful to avoid mutating originals.
  const animals = ["tiger", "zebra", "lion", "giraffe"];

  // ! WRONG: This copies the reference, not the array itself.
  const copyOfAnimals = animals;
  copyOfAnimals[0] = "elephant";
  console.log(animals); // Both changed!
  console.log(animals === copyOfAnimals); // true (same reference)

  const animals2 = ["tiger", "zebra", "lion", "giraffe"];
  console.log(...animals2); // Unpacks: "tiger" "zebra" "lion" "giraffe"

  const copyOfAnimals2 = [...animals2];
  copyOfAnimals2[0] = "elephant";
  console.log(animals2); // Original unchanged
  console.log(copyOfAnimals2); // Only copy changed
  console.log(animals2 === copyOfAnimals2); // false (different references)

  // * Spread with objects: copy and override properties
  const person = { name: "Bob", age: 30 };
  const copyOfPerson = { ...person, age: 50, isStudent: false };
  // Same as: const copyOfPerson = { name: "Bob", age: 30, age: 50, isStudent: false };
  console.log(copyOfPerson);

  // * Combining .map() with spread to create updated copies
  const updatedPeople = people.map((person) => {
    return { ...person, age: person.age + 1, isStudent: false };
  });

  console.log("Original people: ", people);
  console.log("Updated people", updatedPeople);
}

// # .find() - It returns the first element that satisfies the condition or undefined if no such element is found. Stops after the first find.
const people = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 35 },
  { name: "Dave", age: 30 },
];

const firstPersonOver25 = people.find((person) => person.age > 25);
console.log(firstPersonOver25);

const firstPersonOver30 = people.find((person) => person.age === 30);
console.log(firstPersonOver30);

// * Manual equivalent with for...of loop
for (const user of people) {
  if (user.age === 30) {
    console.log("First person, age 30 is being found");
    break;
  }
}

// # .filter() - Creates a new array with ALL elements that pass a test
const allPeopleOver25 = people.filter((person) => person.age > 25);
console.log(allPeopleOver25);

// # .reduce() - Reduces the array to a single value
// * Most powerful array method. Accumulates values step-by-step.
/*
initial value - (0)
takes acc (0) + number (1) = 1
acc is now (1) + curr (2) = 3
acc is now 3 + curr (5) = 8
acc is now 8
*/
const totalAge = people.reduce((accumulator, person) => accumulator + person.age, 0);
console.log(totalAge);
// 1: acc starts at 0 (due to initial value) + 15 (Alice's age) = 15
// 2. acc is 15 + 30 (Bob) = 45
// 3. acc is 45 + 35 (Carol's age) = 80
// 4. acc is 80 + 30 (Dave's age) = 110

const totalAgeVerbose = people.reduce((accumulator, person, index) => {
  console.log(`Step ${index + 1}: acc = ${accumulator}, cur = ${person.age}`);
  const newAcc = accumulator + person.age;
  console.log(`Step ${index + 1}: result = ${newAcc} `);
  return newAcc;
}, 0);
console.log(`Final sum: ${totalAgeVerbose}`);

// # .some() - checks if at least one element passes a test: true/false
// * Returns early (stops at first match)
const isAnyoneAChild = people.some((person) => person.age < 18);
console.log(isAnyoneAChild); // true because Alice's age is 15

// # .every() - checks if all elements pass a test: true/false
// * Returns false as soon as one element fails the test
const areAllAdults = people.every((person) => person.age >= 18);
console.log(areAllAdults); // false, because Alice is 15 and fails the test
