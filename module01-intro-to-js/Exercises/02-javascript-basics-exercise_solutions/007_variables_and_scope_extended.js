// You can work here or download the template!

var myVar = 'Global with var';
function test() {
  // var, let and const behave very similar whtn it comes to function scope
  var myVar = 'Function scoped with var';
  console.log(myVar);
}

test();

console.log(myVar);

if (true) {
  let myLetVar = 'something';
  const myConstVar = 'something else';
  var myVar = 're-declared';
  // let myLetVar = 'something';
  // const myConstVar = 'something else';
  console.log(myLetVar);
  console.log(myConstVar);
  console.log(myVar);
}
// let and const are scoped to the blocks they are declared in
// console.log(myLetVar);
// console.log(myConstVar);

// The 'var' declared in the if-block has leaked out and permanently changed the global variable!
console.log(myVar); // 're-declared'

const myArray = [1, 2, 3];
console.log(myArray);
myArray.push(4);
console.log(myArray);

const myObject = {
  name: 'John',
  age: 30,
};
console.log(myObject);
myObject.age = 31; // Modify a property
myObject.city = 'New York'; // Add a new property
console.log(myObject);
