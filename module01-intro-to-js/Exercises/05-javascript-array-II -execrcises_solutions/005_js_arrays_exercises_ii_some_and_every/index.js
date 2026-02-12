// You can work here or download the template!

// * some: returns true if AT LEAST ONE element passes the test
// * every: returns true IF ALL elements pass the test

const numbers = [4, 8, 15, 16, 23, 42];

// 02. Use the some Method to Check for Numbers Greater Than 20
const hasNumberGreaterThan20 = numbers.some((number) => number > 20);

console.log("hasNumberGreaterThan20", hasNumberGreaterThan20);

// 03. Use the every Method to Check for Numbers Less Than 50
const allNumbersLessThan50 = numbers.every((number) => number < 50);

console.log("allNumbersLessThan50", allNumbersLessThan50);

const students = [
  { name: "Alice", age: 25, passed: true },
  { name: "Bob", age: 22, passed: false },
  { name: "Charlie", age: 27, passed: true },
  { name: "David", age: 20, passed: true },
];

// 05. Use the some Method to Check if Any Student Failed
const hasAnyStudentFailed = students.some((harryPotter) => harryPotter.passed === false);
console.log("hasAnyStudentFailed", hasAnyStudentFailed);

// 06. Use the every Method to Check if All Students are Older or Equal Than 18
const allStudentsAdults = students.every((student) => student.age >= 18);
console.log("allStudentsAdults", allStudentsAdults);

// ! CHALLENGE: Website Form Validation
// * Real-world scenario: Validate form data before submission
const formFields = [
  { name: "email", value: "user@example.com", required: true, valid: true },
  { name: "password", value: "mypassword123", required: true, valid: true },
  { name: "age", value: "", required: true, valid: false },
  { name: "newsletter", value: "yes", required: false, valid: true },
];

const allRequiredFieldsValid = formFields.every(
  (field) => !field.required || (field.required && field.valid && field.value.trim() !== ""),
);
const hasValidationErrors = formFields.some(
  (field) => field.required && (!field.valid || field.value.trim() === ""),
);
if (allRequiredFieldsValid) {
  console.log("✅ Form ready for submission!");
} else {
  cosole.log("❌ Please fix the errors before submitting.");

  const invalidFields = formFields.filter(
    (field) => field.required && (!field.valid || field.value.trim() === ""),
  );
  console.log(
    "Fields that need attention:",
    invalidFields.map((f) => f.name),
  );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ! More ⭐ Extra Challenges ⭐
// * Real-world problem: E-commerce Product Filtering.
// Imagine you are working on an e-commerce website. You have an array
// of products, and you need to display only the products that are
// currently in stock and cost less than $50.
//
// Your task:
// 1. Use the `filter` method to select the correct products.
// 2. Use the `map` method to create a new array of strings that says:
//    "[Product Name] is available for $[Price]."
// 3. Use `forEach` to log each of these strings to the console.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ! ⭐ Extra Challenge #1: E-Commerce Product Filtering
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TEACHING GUIDELINE:
// This challenge combines multiple methods to solve a practical problem.
// It shows how methods can be chained together or used sequentially to
// process data in stages, which is extremely common in web development.

console.log("\n## ⭐ Extra Challenge #1: E-Commerce Products ##");
const productsC = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Webcam", price: 40, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "USB Hub", price: 15, inStock: false },
];

// Your Task:
// 1. Use `filter` to select products that are in stock AND cost less than $50.
// 2. Use `map` to create a new array of announcement strings for the filtered products.
// 3. Use `forEach` to log each announcement.

// --- Solution ---
// Step 1: Filter the products
const affordableInStockProducts = productsC.filter(
  (product) => product.inStock && product.price < 50,
);

// Step 2: Create the announcement strings
const productAnnouncements = affordableInStockProducts.map(
  (product) => `${product.name} is available for $${product.price}.`,
);

// Step 3: Print each announcement
console.log("Available deals:");
productAnnouncements.forEach((announcement) => {
  console.log(announcement);
});

// As 1 command:
console.log("Available deals:");
productsC
  .filter((product) => product.inStock && product.price < 50)
  .map((product) => `${product.name} is available for $${product.price}.`)
  .forEach((announcement) => console.log(announcement));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ! ⭐ Extra Challenge #2: Cleaning Up User Data
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TEACHING GUIDELINE:
// This challenge tackles another very common real-world problem: sanitizing data.
// Data from users or external sources is often messy. This shows how to use
// array methods to "clean" it before using it in your application.

console.log("\n## ⭐ Extra Challenge #2: Data Cleanup ##");
const userData = [
  "  justin_mason  ",
  "  emma_davis",
  null,
  "liam_miller   ",
  undefined,
  "olivia_jones",
];

// Your Task:
// 1. Remove any entries that are not strings (like null or undefined).
// 2. For the remaining strings, remove any extra whitespace from the beginning and end.
// The result should be a clean array of usernames.

// --- Solution ---
// We can chain methods for a clean solution!
const cleanedData = userData
  .filter((entry) => typeof entry === "string") // Step 1: Keep only the strings
  .map((username) => username.trim()); // Step 2: Trim whitespace from each

console.log("Cleaned user data:", cleanedData);
// Expected: ['justin_mason', 'emma_davis', 'liam_miller', 'olivia_jones']
