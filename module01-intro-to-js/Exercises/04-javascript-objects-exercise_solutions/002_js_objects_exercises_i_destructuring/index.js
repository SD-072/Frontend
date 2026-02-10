// # Destructuring
// * Destructuring assignment is a syntax that allows unwrapping arrays or objects into distinct variables.

// # Initial Data
const fruits = ["apple", "banana", "cherry", "date"];
const person = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
  profession: "Web Dev",
};

// # 1. Array Destructuring

// # Old way (Manual access)
// * Accessing elements by index.
{
  const fruit1 = fruits[0];
  const fruit2 = fruits[1];
  console.log("Old Way (Array):", fruit1, fruit2);
}

// # Basic Destructuring
{
  const [fruit1, fruit2] = fruits;
  console.log("Destructuring (Array):", fruit1, fruit2);
}

// # Skipping items
// * You can skip items using a comma.
{
  const [fruit1, , fruit3] = fruits;
  console.log("Skipping Items:", fruit1, fruit3);
}

// # 2. Object Destructuring

// # Old way (Manual assignment)
{
  const name = person.name;
  const age = person.age;
  const city = person.address.city;
  const postalCode = person.address.zip;
  const profession = person.profession || "Unemployed";
  console.log("Old Way (Object):", name, age, city, postalCode, profession);
}

// # Modern Destructuring
{
  const {
    name,
    age,
    address: { city, zip: postalCode }, // * Nested destructuring & Renaming (zip -> postalCode)
    profession = "Unemployed", // * Default value if property is missing
  } = person;

  console.log("Destructuring (Object):", name, age, city, postalCode, profession);
}

// # 3. Function Parameter Destructuring

// # Classical approach
function displayPersonClassic(person) {
  console.log(`Classic Function: Name: ${person.name}, Age: ${person.age}`);
}
displayPersonClassic(person);

// # Destructuring in parameters (with aliases and defaults)
// * We can destructure directly in the function signature.
function displayPersonPartial({
  name: username = "Provide username", // * Renaming and Default
  age = "Unknown",
  profession = "Unemployed",
}) {
  console.log(`Partial Destructuring: Name: ${username}, Age: ${age}, Profession: ${profession}`);
}
displayPersonPartial(person);

// # Rest pattern with Destructuring
// * '...rest' collects the remaining properties into a new object.
function displayPersonRest({ name, age, ...rest }) {
  console.log(`Rest Pattern: Name: ${name}, Age: ${age}`);
  console.log("Other data (Rest):", rest);
}
displayPersonRest(person);

// # Common Usecase (Clean & readable)
function displayPersonCommon({ name, age }) {
  console.log(`Common Use: Name: ${name}, Age: ${age}`);
}

displayPersonCommon(person);

export {}; // * Makes this file a module to avoid global scope collisions.
