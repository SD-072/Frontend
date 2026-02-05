// Example 1: Removing the last element from an array
console.info('Example 1: Removing the last element');
const numbers = [1, 2, 3];
const removedNumber = numbers.pop();
console.log('Updated Numbers: ', numbers); // Output: [1, 2]
console.log('Removed Element: ', removedNumber); // Output: 3

// Example 2: Removing the last element from an array that becomes empty
console.info('Example 2: Removing from a nearly empty array');
const singleElementArray = [1];
const removedSingle = singleElementArray.pop();
console.log('Updated Array: ', singleElementArray); // Output: []
console.log('Removed Element: ', removedSingle); // Output: 1

// Example 3: Trying to pop from an empty array
console.info('Example 3: Removing from an empty array');
const emptyArray = [];
const removedFromEmpty = emptyArray.pop();
console.log('Updated Array: ', emptyArray); // Output: []
console.log('Removed Element: ', removedFromEmpty); // Output: undefined
