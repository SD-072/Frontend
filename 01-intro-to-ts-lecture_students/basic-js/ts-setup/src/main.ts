console.log('Sanity check!');

// num = 'Not anymore!';

// num.forEach((element) => {
//   console.log(element);
// });

// # Primitive Types in TS
//  string
let myString = 'This is a string';

//  number
let num = 6;

// boolean
let bool = false;

// null
let nullVar = null;

// undefined
let undef: undefined;

// any
let anything: any = 'This can be reassigned';

anything = 42;

const constString = 'I cannot be changed';

// constString = 'A different string';

const constBool = false;

// function shout(spoken: string): string {
//   return spoken.toUpperCase();
// }

const shout = (spoken: string): string => {
  return spoken.toUpperCase();
};

// console.log(shout('hey, how are you?'));
// console.log(shout(42));

const print = (content: any) => {
  console.log(content);
};

print(shout('hey, how are you?'));

const isOldEnough = (age: number): string => {
  if (age >= 18) {
    return 'You are old enough';
  } else {
    return 'You are not old enough';
  }
};

let templateLiteral = `Here is an example ${67}`;

console.log(templateLiteral);
console.log(typeof templateLiteral);
console.log(67);
console.log(typeof 67);

const logMessage = (message: string, userId?: number): void => {
  console.log(`${message} ${userId ? `From user ${userId}` : ''}`);
};

logMessage('Hello there!');
logMessage('Something', 5);

const greetUser = (name: string = 'guest'): string => {
  return `Welcome, ${name}`;
};

console.log(greetUser(5));
console.log(greetUser('Ada'));
