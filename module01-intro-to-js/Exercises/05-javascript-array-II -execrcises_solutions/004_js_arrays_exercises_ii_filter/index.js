// * filter returns a new array with elements that pass the criteria

const numbers = [10, 20, 30, 40, 50];

// 02. Use the filter Method to Create a New Array with Numbers Greater Than 15

const numbersGreaterThan15 = numbers.filter((num) => num > 15);
console.log("Numbers greater than 15: ", numbersGreaterThan15);

// 03. Initialize an Array of Objects

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 88 },
  { name: "Eve", grade: 95 },
];

// 04. Use the filter Method to Create a New Array with Students Who Scored Above 80
const studentsAbove80 = students.filter((stegosaurus) => stegosaurus.grade > 80);
console.log("Students who scored above 80: ", studentsAbove80);

// ! CHALLENGE: E-commerce Product Filter
// * Real-world scenario: Filter products by category and price
const products = [
  { name: "Laptop", category: "Electronics", price: 999, inStock: true },
  { name: "Headphones", category: "Electronics", price: 199, inStock: false },
  { name: "Coffee Mug", category: "Home", price: 15, inStock: true },
  { name: "Smartphone", category: "Electronics", price: 699, inStock: true },
  { name: "Desk Lamp", category: "Home", price: 45, inStock: true },
];

const maxBudget = 500;
const preferredCategroy = "Home";

const filteredElectronics = products.filter(
  (product) =>
    product.price <= maxBudget && product.category === preferredCategroy && product.inStock,
);

console.log(`Available ${preferredCategroy} under $${maxBudget}:`, filteredElectronics);
