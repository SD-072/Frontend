// # JS Objects — Creating & Reading Properties

// * Objects group related data into key-value pairs ("properties").
// * Unlike arrays (ordered by index), objects use named keys for direct access.

const person = {
  firstName: "John",
  age: 40,
  isStudent: true,
  hasAdminRights: false,
  address: { street: "Sesame street", houseNo: "40c", city: "Berlin" },
  language: ["english", "german", "spanish"],
  "user-id": "0034523",
};

// # Reading Values

// * Dot notation — the standard way to access known properties.
console.log(person.firstName);
console.log(person.address.city);

// * Bracket notation — required for keys with special characters (e.g. "user-id").
console.log(person["age"]);

// * Dynamic property access — the key comes from a variable at runtime.
const whatUserClickedOn = "age";
console.log(person[whatUserClickedOn]);

// # Modifying Values & Const Behavior

console.log(person.age);
person.age = 45;
console.log(person.age);

// ! `const` prevents REASSIGNMENT of the variable, NOT mutation of its contents.
// ! person = {};  // TypeError: Assignment to constant variable

const nums = [1, 4, 6];
nums[1] = 7;
console.log(nums);

// # Shorthand Property Syntax

const make = "Toyota";
const model = "Corolla";
const year = 2025;

// * Verbose form — explicitly writing key: value even when names match.
const carVerbose = {
  make: make,
  model: model,
  year: year,
};
console.log(carVerbose);

// * Shorthand form — when the variable name matches the key, omit the value.
const car = {
  make,
  model,
  year,
};

console.log(car);
console.log(car.year);
car.color = "Yellow";
car.year = 2016;
console.log(car);

// # Object Static Methods

console.log(Object.keys(car));
console.log(Object.entries(car));

// * Object.freeze() prevents any further mutations to the object.
Object.freeze(car);
car.year = 1999;
console.log(car);
// ! car.year is still 2016 — freeze silently blocks changes in non-strict mode.

// # Object Methods & the `this` Keyword

const person2 = {
  firstName: "John",
  age: 40,
  isStudent: true,
  hasAdminRights: false,
  address: { street: "Sesame street", houseNo: "40c", city: "Berlin" },
  language: ["english", "german", "spanish"],
  "user-id": "0034523",

  // * Shorthand method syntax (equivalent to `sayHi: function() { ... }`)
  sayHi() {
    console.log("Hi, my name is John");
  },
  setAge(newAge) {
    this.age = newAge;
    console.log(`${this.firstName}'s age updated to ${this.age}`);
  },
};

person2.sayHi();
person2.setAge(99);

// # Why `this` Matters — Avoiding Hardcoded References

// * `this` always refers to the object that CALLED the method, making code reusable.

const person3 = {
  firstName: "John",
  age: 40,
  isStudent: true,
  hasAdminRights: false,
  address: { street: "Sesame street", houseNo: "40c", city: "Berlin" },
  language: ["english", "german", "spanish"],
  "user-id": "0034523",

  sayHi() {
    console.log(`Hi, my name is ${person3.firstName}`);
    console.log(`Hi, my name is ${this.firstName}`);
  },
};

const person4 = {
  firstName: "Mary",
  age: 40,
  isStudent: true,
  hasAdminRights: false,
  address: { street: "Sesame street", houseNo: "40c", city: "Berlin" },
  language: ["english", "german", "spanish"],
  "user-id": "0034523",

  sayHi() {
    // ! BUG: Hardcoded person3.firstName — always prints "John" even for person4.
    console.log(`Hi, my name is ${person3.firstName}`);
    console.log(`Hi, my name is ${this.firstName}`);
  },
};

person3.sayHi();
person4.sayHi();
person4.firstName = "Jane";
person4.sayHi();

// # Regular Function vs Arrow Function & `this`

const personFunc = {
  name: "Grace",
  // * Regular method — `this` refers to the object that owns the method.
  say() {
    console.log(`Hello my name is ${this.name}`);
  },
  // ! Arrow functions do NOT have their own `this`.
  // ! `this` inherits from the surrounding lexical scope (window/global), NOT the object.
  sayArrow: () => {
    console.log(`Hello my name is ${this.name}`);
  },
};

personFunc.say();
personFunc.sayArrow();

// # Built-in JS Objects

// * Math — a static object with utility methods (no `new` needed).
console.log(Math.random() * 10);
console.log(Math.round(4.7));
console.log(Math.max(1, 5, 28));
console.log(Math.min(1, 5, 28));

// * Date — must be instantiated with `new` to get a Date object.
const date = new Date();

console.log(date);
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getMonth() + 1);
// ! getMonth() is zero-indexed (0 = January), so add 1 for the human-readable month.
console.log(date.getSeconds());

const birthDay = new Date("2000-01-01");
console.log(birthDay.getFullYear());

// ! Date() without `new` returns a plain string, NOT a Date object.
const date2 = Date();
console.log(Date());
console.log(typeof Date());
console.log(typeof new Date());

// # Object Destructuring

// * Without destructuring — repetitive and verbose:
{
  const username = person.firstName;
  const age = person.age;
  const isStudent = person.isStudent;
  const nationality = person.nationality || "Unkown nationality"; // * Default values kick in only when the property is undefined.
  const city = person.address.city;
  console.log(firstName, age, isStudent, city);
}

person.nationality = "German";

// * With destructuring — extract multiple properties in one statement.
const {
  firstName: username,
  age,
  isStudent,
  nationality = "Unknown nationality",
  address: { city },
} = person;

console.log(firstName);
console.log(age);
console.log(isStudent);
console.log(city);
console.log(nationality);

// # Array Destructuring

const array = [3, 7, 9, 16];

// * Without destructuring:
{
  const firstNumber = array[0];
  const secondNumber = array[1];
  const fourthNumber = array[3];
  console.log(firstNumber, secondNumber, fourthNumber);
}

// * With destructuring — position-based extraction.
// * Use commas to skip elements you don't need.
const [firstNumber, secondNumber] = array;
const [, , , fourthNumber] = array;

console.log(firstNumber);
console.log(secondNumber);
console.log(fourthNumber);

// * For sparse access deep into an array, use object destructuring on the array index.
const myArray = [
  // ... 56 elements
  "item at index 56",
  "item at index 57",
  // ... more elements
];

const { 57: item } = myArray;
console.log(item);
