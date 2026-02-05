// Example 1: Adding a single element to the beginning of an array
console.info('Example 1: Adding a single element');
const numbers = [2, 3, 4];
const newLength1 = numbers.unshift(1);
console.log('Updated Numbers: ', numbers); // Output: [1, 2, 3, 4]
console.log('New length: ', newLength1); // Output: 4

// Example 2: Adding multiple elements to the beginning of an array
console.info('Example 2: Adding multiple elements');
const fruits = ['orange', 'banana'];
const newLength2 = fruits.unshift('apple', 'mango');
console.log('Updated Fruits :', fruits); // Output: ['apple', 'mango', 'orange', 'banana']
console.log('New length: ', newLength2); // Output: 4

// Example 3: Demonstrating usage with different data types
console.info('Example 3: Adding elements of different types');
const mixedData = ['number', true];
const newLength3 = mixedData.unshift(42, { key: 'value' });
console.log('Updated Data: ', mixedData); // Output: [42, { key: 'value' }, 'number', true]
console.log('New length: ', newLength3); // Output: 4
