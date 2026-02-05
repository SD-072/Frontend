/*
# PRIMITIVES
string
number
boolean
undefined
null

BigInt
symbol

# OBJECTS / Reference (memory address) Data Types
Object
Array
Function

Date
RegExp
*/

// // Primitive type comparison
// let a = 10;
// let b = 10;
// console.log(a === b);

// // Object comparison (by reference)
// let obj1 = { value: 10 };
// let obj2 = { value: 10 };
// console.log(obj1 === obj2); // false (different objects in memory)

// let obj3 = obj1;
// obj1.value = 20;
// console.log(obj1);

// console.log(obj3);

// console.log(obj1 === obj3); // true (same object in memory)

// # Arrays
// * Arrays store ordered lists, letting you access and manipulate values by index.
const array = ["John", 40, true, function () {}, {}, []];

const names = ["Samara", "Nil", "Patrick", "Martin"];

// console.log(names[3]);

// console.log(names);
// # Mutating Array Methods
// * Methods like `push()`/`pop()` change the original array in-place.
names.push("Renke", "Maria");
// console.log(names);

names.pop();
// console.log(names);

// console.log(names.length);

names.reverse();
// console.log(names);

// console.log(`Before toReversed: ${names}`);
const newArray = names.toReversed();
// console.log(`After toReversed: ${names}`);
// console.log(`NewArray ${newArray}`);

// # Non-Mutating Array Copy
// * `slice()` creates a new array without changing the original.
// console.log(`Before slice: ${names}`);
const slicedArray = names.slice(1, 4);
// console.log(`After slice: ${names}`);
// console.log(`Sliced array: ${slicedArray}`);

// # Mutating vs Non-Mutating Methods
// * Use mutating methods when you intend to update the original list; otherwise prefer copy-based methods.
// .splice() - changes original - cutting out and you can add items
// .toSplice() - creates copy - cutting out and you can add items
// .slice() - creates copy - cutting out

// # In-Place Editing with `splice()`
// * `splice()` is for editing the same array by removing/replacing/adding items.
// Example below removes 2 items starting from index 1 and inserts 'Mango'
const fruits = ["Apple", "Banana", "Orange", "Kiwi"];
fruits.splice(1, 2, "Mango"); // Output: ['Apple', 'Mango', 'Kiwi']
// console.log(fruits);

const names2 = ["Samara", "Nil", "Patrick", "Martin"];

// console.log(names2);

const joinedString = names2.join();
// console.log(joinedString);

// console.log("Names of SD72: " + names2.join(", "));

// console.log(joinedString.toUpperCase());

const string = "abcde";
// console.log(string.toUpperCase());
// console.log(string.split(""));

const stringWithDashes = "ab-cd-e";
// console.log(stringWithDashes.split("-"));

const sentence = "Hi, my name is Renke";
const splitString = sentence.split(" ");
// console.log(splitString);
// console.log(splitString.join(" "));

// # LOOPS

const namesLoop = ["Samara", "Nil", "Patrick", "Martin"];

for (let i = 0; i < namesLoop.length; i = i + 2) {
  const upperCaseName = namesLoop[i].toUpperCase();
  console.log(`Name at index No. ${i}: ${upperCaseName}`);
}

for (const chicken of namesLoop) {
  console.log(chicken.toLocaleLowerCase());
}
