// Step 1: Initialize an array with initial values
const myArray = [1, 2, 3, 4, 5];

// Step 2: Add elements to the end of the array using .push
myArray.push(6);
myArray.push(7);

// Print the array after using .push
console.log(myArray); // Prints: [1, 2, 3, 4, 5, 6, 7]

// Step 3: Remove the last element using .pop
myArray.pop();

// Print the array after using .pop
console.log(myArray); // Prints: [1, 2, 3, 4, 5, 6]

// Step 4: Remove the first element using .shift
myArray.shift();

// Print the array after using .shift
console.log(myArray); // Prints: [2, 3, 4, 5, 6]

// Step 5: Add elements to the beginning of the array using .unshift
myArray.unshift(0);
myArray.unshift(-1);

// Print the array after using .unshift
console.log(myArray); // Prints: [-1, 0, 2, 3, 4, 5, 6]
