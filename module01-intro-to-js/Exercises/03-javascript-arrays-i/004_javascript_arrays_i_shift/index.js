// Example 1: Removing the first element from an array
console.info('Example 1: Removing the first element');
const numbers = [10, 20, 30, 40];
const removedFirst = numbers.shift();
console.log('Updated Numbers: ', numbers); // Output: [20, 30, 40]
console.log('Removed Element: ', removedFirst); // Output: 10

// Example 2: Continuously removing the first element until empty
console.info('Example 2: Continuously removing the first element until empty');
const fruits = ['apple', 'banana', 'cherry'];
while (fruits.length > 0) {
  let removedFruit = fruits.shift();
  console.log('Removed Fruit: ', removedFruit);
  console.log('Remaining Fruits: ', fruits);
}

// Example 3: Trying to shift from an empty array
console.info('Example 3: Removing from an empty array');
const emptyArray = [];
const removedFromEmpty = emptyArray.shift();
console.log('Updated Array: ', emptyArray); // Output: []
console.log('Removed Element: ', removedFromEmpty); // Output: undefined
