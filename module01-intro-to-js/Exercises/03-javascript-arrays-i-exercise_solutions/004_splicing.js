// Array 1: Use splice() method
let array1 = [10, 20, 30, 40, 50];
console.log('Original array1:', array1);

// Modify array1 in place by removing 1 element at index 2 and adding 35, 36
array1.splice(2, 1, 35, 36);
console.log('Modified array1:', array1);

// Array 2: Use toSpliced() method
let array2 = ['x', 'y', 'z'];
console.log('Original array2:', array2);

// Create a modified copy of array2 by removing 1 element at index 1 and adding 'a', 'b'
let modifiedArray2 = array2.toSpliced(1, 1, 'a', 'b');
console.log('Modified copy of array2:', modifiedArray2);
console.log('Original array2 after toSpliced:', array2);
