// You can work here or download the template!
// Array of animals in the zoo
const animals = ["lion", "tiger", "bear", "giraffe", "zebra", "monkey"];

// Task 1: Count total animals using a for loop
// Best for when you know the exact number of iterations (e.g., the length of an array).
let totalCount = 0;
for (let i = 0; i < animals.length; i++) {
  totalCount++;
}
console.log(`Total animals in the zoo: ${totalCount}`);

// Alternative solution:
let counter = 0;
for (counter = 0; animals[counter] !== undefined; counter++);
console.log(`Total animals in the zoo: ${counter}`);

// Task 2: Count animals with names of five or more letters using a while loop
// Best when a loop should continue as long as a condition is true, and the iteration count is not known beforehand.
let countFiveLettersOrMore = 0;
let index = 0;
while (index < animals.length) {
  if (animals[index].length >= 5) {
    countFiveLettersOrMore++;
  }
  index++;
}
console.log(`Animals with names of five or more letters: ${countFiveLettersOrMore}`);

// Task 3: Count animals until a name starts with 'm' using a do...while loop
// Best when you need the code block to run at least once, regardless of the condition.
let countUntilM = 0;
let position = 0;
do {
  if (animals[position][0].toLowerCase() === "m") {
    break;
  }
  countUntilM++;
  position++;
} while (position < animals.length);

console.log(`Number of animals counted until we reached one starting with 'm': ${countUntilM}`);

// Alternative:
let countUntilM2 = 0;
let position2 = 0;

if (animals.length > 0) {
  do {
    if (animals[position].toLowerCase().startsWith("m")) {
      break;
    }
    countUntilM2++;
    position2++;
  } while (position2 < animals.length);
}
console.log(`Number of animals counted until we reached one starting with 'm': ${countUntilM2}`);

// Nil:
const mAnimal = {
  count: 0,
  animal: "",
};

let indexCounter = 0;

do {
  if (animals[indexCounter][0] === "m") {
    mAnimal.animal = animals[indexCounter];
    mAnimal.count = indexCounter++;
    console.log(animals[indexCounter]);
  } else {
    mAnimal.count = indexCounter++;
  }
} while (!mAnimal.animal && indexCounter < animals.length);

console.log(`Number of animals counted till we reached one starting with "m": ${mAnimal.count}`);
