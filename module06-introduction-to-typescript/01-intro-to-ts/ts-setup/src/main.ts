// # Primitive Stypes

// string
const myString = 'I cannot be changed';
// myString = 'A different string';

// number
let num = 6;

// boolean
let bool = false;

// null
let nullVar: null = null;

// undefined
let undef: undefined;

// any
let anything: any = 'This can be reassigned';
anything = 42;

// void

// ----

// function shout(spoken: string): string {
//   return spoken.toUpperCase();
// }

const shout = (spoken: string) => {
  return spoken.toUpperCase();
};

// console.log(shout('Hey, how are you?'));
// console.log(shout(42));

const print = (content: any): void => {
  console.log(content);
};

// print(shout('Hey, how are you?'));

const isOldEnough = (age: number): string => {
  if (age >= 18) {
    return 'You are old enough';
  } else {
    return 'You are not old enough';
  }
};

let templateLiteral = `Here is an example ${67}`;

// console.log(templateLiteral);
// console.log(typeof templateLiteral);
// console.log(67);
// console.log(typeof 67);

const logMessage = (message: string, userId?: number) => {
  console.log(`${message} ${userId ? `From user ${userId}` : ''}`);
};

logMessage('Hello there!');
logMessage('Something', 6);

const greetUser = (name: string = 'guest'): string => {
  return `Welcome ${name}`;
};

console.log(greetUser());
console.log(greetUser('Ada'));
