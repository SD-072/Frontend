// Step 1: Initialize an array of numbers
const numberArray = [10, 20, 30, 40, 50];

// Step 2: Iterate over the array with a for loop
for (let i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

// Step 3: Iterate over the array with a for...of loop
for (const num of numberArray) {
  console.log(num);
}

// Step 4: Initialize an array of objects
const objectArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Step 5: Iterate over the array of objects with a for loop
for (let i = 0; i < objectArray.length; i++) {
  console.log(`Name: ${objectArray[i].name}, Age: ${objectArray[i].age}`);
}

// Step 6: Iterate over the array of objects with a for...of loop
for (const obj of objectArray) {
  console.log(`Name: ${obj.name}, Age: ${obj.age}`);
}

/*
  Using a `for...of` loop, find the user named 'Bob' in the `objectArray` and
  print out a message like "Found Bob, who is 30 years old."
*/
for (const user of objectArray) {
  if (user.name === "Bob") {
    console.log(`Challenge: Found Bob, who is ${user.age} years old.`);
    break; // We can stop the loop once we've found our user!
  }
}
