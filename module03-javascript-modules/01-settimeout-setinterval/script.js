// # setTimeout

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

const callBackfunc = () => {
  console.log("Hello");
};

const milliseconds = 2000;

setTimeout(callBackfunc, milliseconds);

// setTimeout(() => {
//   console.log("Hello again!!!!");
//   setTimeout(() => {
//     console.log("Hello again");
//   }, 3000);
// }, 4000);

// # setInterval
// setInterval(() => {
//   console.log("Bye");
// }, 2000);

const number = document.getElementById("number");

// let count = 0

const interval = setInterval(() => {
  number.textContent = Number(number.textContent) + 1;
}, 1000);

clearTimeout();

setTimeout(() => {
  clearInterval(interval);
}, 10000);
