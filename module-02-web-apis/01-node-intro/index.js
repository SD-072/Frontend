// # Node.js Command Line Arguments & Type Conversion

// Extract command-line arguments, skipping the first two
const args = process.argv.slice(2);

// Validate argument count
if (args.length !== 2) {
  console.log("❌ Please provide exactly two arguments");
  console.log(`Usage: node index.js <number1> <number2>`);
  process.exit(1);
}

// Destructure and convert to numbers
const [inputOne, inputTwo] = args;
const num1 = Number(inputOne);
const num2 = Number(inputTwo);

// Validate that inputs are actual numbers
if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log("❌ Both arguments must be valid numbers");
  console.log(`Received: "${inputOne}" and "${inputTwo}"`);
  process.exit(1);
}

// Calculate and display result
const sum = num1 + num2;
console.log(`✅ ${num1} + ${num2} = ${sum}`);
