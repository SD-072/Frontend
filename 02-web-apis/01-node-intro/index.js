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

// ============================================================================
// # DETAILED EXPLANATIONS & EXAMPLES
// ============================================================================

console.log("\n" + "=".repeat(70));
console.log("EDUCATIONAL DEMONSTRATIONS");
console.log("=".repeat(70));

// * process.argv is an array containing command line arguments
// * Index 0: path to Node executable
// * Index 1: path to the JavaScript file being executed
// * Index 2+: actual command line arguments
console.log("\n// # process.argv structure:");
console.log("process.argv[0] -> Node executable path");
console.log("process.argv[1] -> Script file path");
console.log("process.argv[2+] -> Your arguments");
console.log(`Original inputs: "${inputOne}" and "${inputTwo}"`);
console.log(`Converted to: ${num1} and ${num2}`);

// # Understanding Type Conversion Functions

{
  // * Number() - Strict conversion, fails on any non-numeric characters
  console.log("\n// # Number() - Strict conversion:");
  console.log('Number("34")   ->', Number("34")); // 34
  console.log('Number("34px") ->', Number("34px")); // NaN
  console.log('Number("42.2") ->', Number("42.2")); // 42.2
  console.log("// * Method 2: Unary plus operator (+) - shorthand for Number()");
  console.log('+("42") ->', +"42"); // 42
}

{
  // * parseInt() - Extracts integer from start of string until non-digit
  console.log("\n// # parseInt() - Extracts integer from beginning:");
  console.log('parseInt("42")     ->', parseInt("42")); // 42
  console.log('parseInt("42.2px") ->', parseInt("42.2px")); // 42
  console.log('parseInt("px42")   ->', parseInt("px42")); // NaN
}

{
  // * parseFloat() - Extracts float from start of string
  console.log("\n// # parseFloat() - Extracts decimal number:");
  console.log('parseFloat("42.2")     ->', parseFloat("42.2")); // 42.2
  console.log('parseFloat("42.2 3px") ->', parseFloat("42.2 3px")); // 42.2
  console.log('parseFloat("3.14px")   ->', parseFloat("3.14px")); // 3.14
}

// # Understanding NaN Validation

{
  // ! isNaN() converts the argument to a number first, then checks
  // ! This can lead to unexpected results with non-number values
  console.log("\n// # isNaN() - Coerces to number first:");
  console.log('isNaN("hello") ->', isNaN("hello")); // true (converts to NaN)
  console.log("isNaN(5)       ->", isNaN(5)); // false
  console.log("isNaN(NaN)     ->", isNaN(NaN)); // true
  console.log('isNaN("5")     ->', isNaN("5")); // false (converts "5" to 5)
}

{
  // * Number.isNaN() does NOT convert, only returns true if value is exactly NaN
  // * This is the preferred method for checking NaN
  console.log("\n// # Number.isNaN() - No coercion, stricter check:");
  console.log('Number.isNaN("hello") ->', Number.isNaN("hello")); // false
  console.log("Number.isNaN(5)       ->", Number.isNaN(5)); // false
  console.log("Number.isNaN(NaN)     ->", Number.isNaN(NaN)); // true
  console.log('Number.isNaN("5")     ->', Number.isNaN("5")); // false
}

{
  // ! NaN is type "number" - this is a quirk of JavaScript
  console.log("\n// # Type of NaN (JavaScript quirk):");
  console.log("typeof 5   ->", typeof 5); // "number"
  console.log("typeof NaN ->", typeof NaN); // "number" (!!)
}

console.log("\n" + "=".repeat(70));
