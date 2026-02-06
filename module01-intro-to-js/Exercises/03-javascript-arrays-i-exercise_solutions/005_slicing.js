const slicedArray1 = array.slice(1, 4); // From index 1 to 3
console.log("Sliced portion (index 1 to 3):", slicedArray1);

const slicedArray2 = array.slice(3); // From index 3 to the end
console.log("Sliced portion (from index 3 to end):", slicedArray2);

const slicedArray3 = array.slice(-4); // The last 4 elements
console.log("Sliced portion (last 4 elements):", slicedArray3);

console.log("Original array after slicing:", array);

/*
  Imagine you have a list of products and you want to show X items per page.
  How would you use .slice() to get the items for the second page?
*/
const products = [
  "Book",
  "Laptop",
  "Headphones",
  "Mouse",
  "Keyboard",
  "Monitor",
  "Webcam",
  "Plant",
  "Jacket",
];
const itemsPerPage = 3;

const page1 = products.slice(0, itemsPerPage);
console.log(page1);

// Page 2 starts after the items from page 1.
// const page2 = products.slice(page1.length, page1.length + itemsPerPage);
const page2 = products.slice(itemsPerPage, itemsPerPage * 2);
console.log("Products on Page 2:", page2); // ['Mouse', 'Keyboard', 'Monitor']
