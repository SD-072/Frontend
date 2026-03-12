// # Complex Types in TypeScript
// * This file shows how TypeScript adds safety to arrays, tuples, objects,
// * unions, interfaces, intersections, literal values, and function signatures.

// # Typed Arrays
const strings: string[] = ['hi', 'bye', 'what?'];
const nums: number[] = [1, 3, 5, 6, 7];
const bools: Array<boolean> = [true, false, false, true];
const mixed: (string | number)[] = [1, 'hi', 2, 'bye'];

nums.push(4);

console.log('strings:', strings);
console.log('nums:', nums);
console.log('bools:', bools);
console.log('mixed:', mixed);

// # Literal Inference
// * `let` stays flexible because the value may change later.
// * `const` becomes more specific, which helps TypeScript narrow types.
let greeting = 'Hello';
const fixedGreeting = 'Hello';

greeting = 'Hello again';

console.log('greeting:', greeting);
console.log('fixedGreeting:', fixedGreeting);

// # Tuples
// * Tuples are useful when position has meaning, like x/y coordinates.
// ! Order matters in a tuple. Swapping values changes the meaning.
const graphCoordinates: [number, number, number?] = [23, -3];

console.log('graphCoordinates:', graphCoordinates);

// # Object Types, Readonly, Optional Properties, and Type Aliases
type StringOrNumber = string | number;

type Person = {
  id: StringOrNumber;
  readonly name: string;
  age: number;
  city?: string;
};

const person: Person = {
  id: '45u345-43',
  name: 'Steve',
  age: 72,
  city: 'Berlin',
};

const person2: Person = {
  id: 4,
  name: 'Reed',
  age: 43,
};

// * `readonly` protects important data during development.
// ! `readonly` is a TypeScript rule, not automatic runtime protection.
person.age = 73;

console.log('person:', person);
console.log('person2:', person2);

// # Array of Objects
const people: Person[] = [];
people.push(person);
people.push(person2);

console.log('people:', people);

// # any[]
// ! `any` removes TypeScript protection, so use it sparingly.
const whatever: any[] = [];
whatever.push(1);
whatever.push('hi');
whatever.push({ ok: true });

console.log('whatever:', whatever);

// # Interface Merging
// * Interfaces can merge across multiple declarations, which is useful when
// * different parts of an app extend the same shape over time.
interface User {
  name: string;
}

interface User {
  age: number;
  isActive: boolean;
}

const users: User[] = [
  { name: 'Ada', age: 36, isActive: true },
  { name: 'Grace', age: 30, isActive: false },
];

console.log('users:', users);
users.forEach((currentUser) => {
  console.log(
    `${currentUser.name} is ${currentUser.age} years old. ${currentUser.isActive ? 'User is active' : 'User is inactive'}`,
  );
});

// # Optional Chaining and Fallback Values
// * Optional chaining avoids crashes when optional data is missing.
// * Nullish coalescing keeps valid falsy values like 0 or '' instead of
// * replacing them too early with defaults.
if (person.city) {
  console.log('city uppercase with guard:', person.city.toUpperCase());
}

console.log('city uppercase with optional chaining:', person.city?.toUpperCase());
console.log('city with OR fallback:', person.city || 'Unknown');
console.log('city with nullish fallback:', person.city ?? 'Unknown');

const zeroValue: number | null = 0;
const emptyText: string | null = '';
const missingValue: string | null = null;

console.log('0 with OR:', zeroValue || 'Default');
console.log('0 with nullish:', zeroValue ?? 'Default');
console.log("'' with OR:", emptyText || 'Default');
console.log("'' with nullish:", emptyText ?? 'Default');
console.log('null with OR:', missingValue || 'Default');
console.log('null with nullish:', missingValue ?? 'Default');

// # Nested Object Types
type UserSettings = {
  theme: 'light' | 'dark';
  language: 'de' | 'en' | 'es';
};

type UserProfile = {
  name: string;
  settings: UserSettings;
};

const userProfile: UserProfile = {
  name: 'Marvel',
  settings: {
    theme: 'dark',
    language: 'en',
  },
};

console.log('userProfile:', userProfile);

// # Type Intersections
// * Intersections combine multiple type contracts into one final shape.
type DBEntry = {
  _id: string;
  createdAt: string;
};

type Role = 'admin' | 'user' | 'staff';

type DBUser = DBEntry & {
  name: string;
  email: string;
  password: string;
  role: Role;
};

interface DBEntryInterface {
  _id: string;
  createdAt: string;
}

interface DBUserInterface extends DBEntryInterface {
  name: string;
  email: string;
  password: string;
  role: Role;
}

const dbUser: DBUser = {
  _id: '1235sdgsd',
  name: 'Steve Rogers',
  email: 'captain@america.com',
  password: 'stevepass',
  createdAt: '2026-12-03',
  role: 'user',
};

const dbUserFromInterface: DBUserInterface = {
  _id: '4567asdf',
  name: 'Natasha Romanoff',
  email: 'widow@shield.com',
  password: 'natashapass',
  createdAt: '2026-12-04',
  role: 'admin',
};

console.log('dbUser:', dbUser);
console.log('dbUserFromInterface:', dbUserFromInterface);

// # Literal Unions
// * Literal unions limit values to a small set of valid options.
// ! Invalid values are best kept as comments because they should fail type-checking.
type Direction = 'left' | 'right' | 'up' | 'down';

let move: Direction = 'up';
move = 'left';

function movePlayer(direction: Direction) {
  console.log(`Player moves ${direction}`);
}

function handleDirection(direction: Direction) {
  switch (direction) {
    case 'left':
      console.log('Moving left');
      break;
    case 'right':
      console.log('Moving right');
      break;
    case 'up':
      console.log('Moving up');
      break;
    case 'down':
      console.log('Moving down');
      break;
    default: {
      const exhaustiveCheck: never = direction;
      return exhaustiveCheck;
    }
  }
}

movePlayer('left');
movePlayer('down');
handleDirection('left');
handleDirection('up');

// # Function Types
// * A function type lets multiple functions share one contract.
type Calculation = (num1: number, num2: number) => number;

const add: Calculation = (a, b) => a + b;

const multiply: Calculation = (a, b) => {
  return a * b;
};

const divide: Calculation = (a, b) => {
  return a / b;
};

console.log('add:', add(5, 4));
console.log('multiply:', multiply(5, 4));
console.log('divide:', divide(20, 4));
