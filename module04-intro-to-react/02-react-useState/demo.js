const array = [
  'Martin',
  () => {
    console.log('Function is called');
  },
  {},
];

// const name = array[0];
// const func = array[1];

const [name, func] = array;

console.log(name);
func();
