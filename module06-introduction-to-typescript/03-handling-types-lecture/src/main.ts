// # Learning Concept: Handling Types in TypeScript
// * Strong typing becomes useful when the compiler can follow the same runtime checks your code already makes.
// * This file turns lecture snippets into a runnable reference for narrowing, assertions, and safer branching.

const logSection = (title: string) => {
  console.log(`\n=== ${title} ===`);
};

console.clear();

// # Enum-Style Constants
// * This project uses `erasableSyntaxOnly`, so a readonly object gives enum-like safety without non-erasable TypeScript syntax.
// ! Real `enum` syntax is kept here as a lecture reference, but it stays commented because this project config rejects it.
// enum Direction {
//   Up = 'up',
//   Down = 'down',
//   Left = 'left',
//   Right = 'right',
// }

const DirectionEnumLike = {
  Up: 'up',
  Down: 'down',
  Left: 'left',
  Right: 'right',
} as const;

type Direction = (typeof DirectionEnumLike)[keyof typeof DirectionEnumLike];

let move: Direction = DirectionEnumLike.Up;

function turnWithEnumLike(dir: Direction) {
  if (dir === DirectionEnumLike.Left) {
    console.log('Turning left with an enum-style value.');
  }
}

logSection('Enum-Style Constants');
console.log(`Starting direction: ${move}`);
turnWithEnumLike(DirectionEnumLike.Left);
move = DirectionEnumLike.Right;
console.log(`Updated direction: ${move}`);

// # Literal Unions
// * Literal unions give enum-like safety with plain values, which is often enough for UI and API work.
type DirectionUnion = 'left' | 'right' | 'up' | 'down';

function turnWithLiteralUnion(dir: DirectionUnion) {
  if (dir === 'left') {
    console.log('Turning left with a literal union.');
  } else {
    console.log(`Turning ${dir} with a literal union.`);
  }
}

logSection('Literal Unions');
turnWithLiteralUnion('left');
turnWithLiteralUnion('up');

// # as const
// * `as const` freezes object values into exact literals, so TypeScript can derive precise types from real data.
const directionMap = {
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right',
} as const;

type DirectionKey = keyof typeof directionMap;

function moveTo(dir: DirectionKey) {
  console.log(`Moving ${directionMap[dir]}.`);
}

logSection('as const');
moveTo('up');

// # Type Narrowing
// * Narrowing matters because many real values arrive as broad unions, but your logic usually needs something more specific.

// # Truthiness Narrowing
const alertMe = (msg: string): void => {
  if (msg) {
    console.log(`Alert message: ${msg}`);
  } else {
    console.log('Did you forget why you wanted to be alerted?');
  }
};

logSection('Truthiness Narrowing');
alertMe('Remember to narrow optional values.');
alertMe('');

// # Optional Chaining
// * Optional chaining lets you safely stop when a value is missing instead of crashing on the next property access.
function printLength(str?: string) {
  const characters = str?.split('');

  if (characters) {
    console.log(`String length: ${characters.length}`);
  } else {
    console.log('No string was provided.');
  }
}

logSection('Optional Chaining');
printLength('TypeScript');
printLength();

// # Equality Narrowing
// * When two union values are equal, TypeScript can keep only the types that both values could share.
function compare(x: string | number, y: string | boolean) {
  if (x === y) {
    console.log(x.toUpperCase());
  } else {
    console.log('These values do not narrow to the same type and value.');
  }
}

logSection('Equality Narrowing');
compare(4, '4');
compare(4, true);
compare('hello', 'hello');

// # Type Guards with typeof
// * `typeof` is the fastest way to split primitive unions into code paths that can safely use type-specific methods.
function printValue(value: string | number): void {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

type MessageObject = { message: string };

function alertUser(value: string | MessageObject) {
  if (typeof value === 'string') {
    console.log(value.split(''));
  } else {
    console.log(value.message.split(''));
  }
}

logSection('typeof Type Guards');
printValue(4);
printValue('test');
alertUser('A plain string message');
alertUser({ message: 'A structured message' });

// # Type Guarding Objects
// ! `typeof` reports both arrays and object literals as `object`, so it is not enough when object shapes matter.
logSection('Object Checks');
console.log(typeof { firstName: 'Bob' });
console.log(typeof [1, 2, 3]);
console.log(Array.isArray({ firstName: 'Bob' }));
console.log(Array.isArray([1, 2, 3]));

// # The instanceof Operator
// * `instanceof` is useful when values come from classes like `Date`, where behavior matters more than raw shape.
function logDateOrString(val: Date | string) {
  if (val instanceof Date) {
    console.log(
      val.toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    );
  } else {
    console.log(val.trim());
  }
}

logSection('instanceof');
logDateOrString('1989-12-24');
logDateOrString(new Date('1989-12-24'));

// # Error Handling
// * Catch values are `unknown` on purpose, because thrown values are not guaranteed to be `Error` objects.
const throwSomething = (throwError: boolean) => {
  try {
    if (throwError) {
      throw new Error('This will be the message property.', { cause: 'BAD_DATA' });
    }

    throw 'This value has no message property, so narrowing matters in catch blocks.';
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.cause);
    } else {
      console.error(error);
      console.error('Default error message');
    }
  }
};

logSection('Error Handling');
throwSomething(true);
throwSomething(false);

// # The in Operator
// * The `in` operator narrows object unions by checking for the property that makes each shape unique.
{
  type BarkingDog = { name?: string; bark: () => void };
  type MeowingCat = { name?: string; meow: () => void };
  type HouseholdPet = BarkingDog | MeowingCat;

  const isDog = (pet: HouseholdPet): pet is BarkingDog => {
    return 'bark' in pet;
  };

  function speakWithInOperator(pet: HouseholdPet) {
    if (isDog(pet)) {
      pet.bark();
    } else {
      pet.meow();
    }
  }

  const guardDog: BarkingDog = {
    bark: () => console.log('Woof!'),
  };

  const houseCat: MeowingCat = {
    meow: () => console.log('Meow!'),
  };

  logSection('in Operator');
  speakWithInOperator(guardDog);
  speakWithInOperator(houseCat);
}

// # Discriminated Unions
// * A shared discriminator like `kind` gives every branch an explicit identity, which scales better than guessing from shape.
type Dog = { kind: 'dog'; bark: () => void };
type Cat = { kind: 'cat'; meow: () => void };
type Bird = { kind: 'bird'; tweet: () => void };

type Pet = Dog | Cat | Bird;

function speak(pet: Pet) {
  switch (pet.kind) {
    case 'dog':
      pet.bark();
      break;
    case 'cat':
      pet.meow();
      break;
    case 'bird':
      pet.tweet();
      break;
    default: {
      const exhaustiveCheck: never = pet;
      return exhaustiveCheck;
    }
  }
}

const dog: Dog = {
  kind: 'dog',
  bark: () => console.log('Woof!'),
};

const cat: Cat = {
  kind: 'cat',
  meow: () => console.log('Meow!'),
};

const bird: Bird = {
  kind: 'bird',
  tweet: () => console.log('Tweet!'),
};

logSection('Discriminated Unions');
speak(dog);
speak(cat);
speak(bird);

// # Type Assertion
// * Assertions are promises you make to the compiler when you know more than it can infer from the surrounding code.
// ! Assertions do not create missing DOM elements or validate API data at runtime.

// # Not Null Assertion
const btn = document.querySelector<HTMLButtonElement>('#btn')!;
btn.textContent = 'CLICKED WITH TYPES';
btn.classList.add('px-4');

// # Type Assertion with `as`
const input = document.querySelector('#text-input') as HTMLInputElement;
input.value = 'Type assertions are runtime promises.';

logSection('Type Assertions');
console.log(input.value);

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const posts = (await response.json()) as Post[];

    posts.slice(0, 3).forEach((post) => {
      console.log(`Post #${post.id}: ${post.title}`);
    });

    return posts;
  } catch (error) {
    console.error('Unable to fetch posts for the type assertion example.');
    console.error(error);
    return [] as Post[];
  }
}

logSection('Fetching API Data');
await fetchPosts();

type DiaryEntry = {
  id: string;
  url: string;
  title: string;
};

function getFromLocalStorage(key: string) {
  const localDataStr = localStorage.getItem(key);

  if (!localDataStr) {
    console.log(`Nothing stored under "${key}".`);
    return;
  }

  const localData = JSON.parse(localDataStr) as DiaryEntry[];
  const firstEntry = localData[0];

  if (firstEntry) {
    console.log(firstEntry.title);
  }
}

localStorage.setItem(
  'diaryEntries',
  JSON.stringify([
    {
      id: '1',
      url: 'https://example.com/typescript-handling-types',
      title: 'Handling Types Reference',
    },
  ] satisfies DiaryEntry[]),
);

logSection('localStorage Assertion');
getFromLocalStorage('diaryEntries');
