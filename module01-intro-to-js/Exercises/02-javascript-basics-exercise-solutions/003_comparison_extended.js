// You can work here or download the template!
// Strict vs Simple Equality and Inequality
console.log('5 == "5": ', 5 == '5'); // Simple Equality, should be true
console.log('5 === "5": ', 5 === '5'); // Strict Equality, should be false

console.log('10 != "10": ', 10 != '10'); // Simple Inequality, should be false
console.log('10 !== "10": ', 10 !== '10'); // Strict Inequality, should be true

// Greater than, Less than, Greater than or Equal to, Less than or Equal to
console.log('5 > 3: ', 5 > 3); // True
console.log('"5" > "3": ', '5' > '3'); // True, string comparison

console.log('10 < 20: ', 10 < 20); // True
console.log('"10" < "20": ', '10' < '20'); // True, string comparison

console.log('5 >= 5: ', 5 >= 5); // True
console.log('"5" >= 5: ', '5' >= 5); // True, type coercion from string to number

console.log('10 <= 20: ', 10 <= 20); // True
console.log('"10" <= "20": ', '10' <= '20'); // True, string comparison
// String comparison can be tricky!
console.log('"2" > "10":', '2' > '10'); // True, because character '2' comes after character '1'. Strings are compared character-by-character

// Additional comparisons to illustrate different outcomes
console.log('true == "true": ', true == 'true'); // False, different types and values
console.log('false === false: ', false === false); // True, same type and value
console.log('0 == false: ', 0 == false); // True, type coercion makes them equivalent
console.log('0 === false: ', 0 === false); // False, no type coercion and different types
