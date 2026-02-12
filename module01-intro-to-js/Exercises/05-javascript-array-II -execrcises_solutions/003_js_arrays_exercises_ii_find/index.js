// You can work here or download the template!

const numbers = [10, 20, 30, 40, 50];

// 02. Use the find Method to Locate a Number Greater Than 25

const numberGreaterThan25 = numbers.find((num) => num > 25);

console.log("First number greater than 25: ", numberGreaterThan25);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

// 04. Use the find Method to Locate a Person Named "Charlie"

const personNamedCharlie = people.find((person) => person.name === "Charlie");
console.log("Person named Charlie:", personNamedCharlie);

// ! CHALLENGE: User Authentication
// * Real-world scenario: Find user by email for login
const users = [
  { id: 1, email: "alice@example.com", role: "admin" },
  { id: 2, email: "bob@example.com", role: "user" },
  { id: 3, email: "charlie@example.com", role: "moderator" },
];

const loginEmail = "bob@example.com";

const authenticatedUser = users.find((user) => user.email === loginEmail);

if (authenticatedUser !== undefined) {
  console.log(`Welcome ${authenticatedUser.email}! Role: ${authenticatedUser.role}`);
} else {
  console.log("User not found. Please check your email.");
}
