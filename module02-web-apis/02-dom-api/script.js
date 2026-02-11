// # Learning Concept: DOM Selection, Mutation, Events, and Form Handling
// * Why this matters: The DOM API lets JavaScript move from static markup to interactive UI behavior.
console.log(document);

const subheading = document.getElementById("sub-heading");
console.log("getElementById: ", subheading);

// target like a CSS selector
const subHeadingUsindQS = document.querySelector("#sub-heading");
console.log("querySelector: ", subHeadingUsindQS);

subheading.innerText = "JavaScript is super cool!";
subheading.style.color = "red";

subheading.classList.add("m-2", "bg-yellow-500");
subheading.classList.remove("bg-yellow-500");

// Getting mutliple Elements
const paras = document.getElementsByClassName("para");
console.log("getElementsByClassName: ", paras);

const parasUsingQS = document.querySelectorAll(".para");
console.log("querySelectorAll: ", parasUsingQS);

const paraUsingQS = document.querySelector(".para");
console.log("querySelector:", paraUsingQS.innerText);

console.log(paras[1]);

for (let i = 0; i < paras.length; i++) {
  console.log(paras[i]);
}

const parasArray = [...paras];
parasArray.forEach((i) => console.log(i));

for (const para of paras) {
  console.log(para.textContent);
  para.style.color = "blue";
}

// Get elements by Tag Name
const parasByTagName = document.getElementsByTagName("p");
console.log("getElementsByTagName: ", parasByTagName);

// # Creating Elements
const paraContainer = document.querySelector(".para-container");

const createPara = (text) => {
  const newPara = document.createElement("p");
  newPara.textContent = text;
  newPara.setAttribute("class", "para");
  // newPara.classList.add("para");

  // paraContainer.prepend(newPara)
  paraContainer.appendChild(newPara);
};

createPara("JS created this para");
createPara("JS created this para again");

// ! SECURITY WARNING
// be a bit carefull with innerHTML, when going into production
// element.innerHTML = userInput;
// {
//   /* <script> some evil JS </script> */
// }
// element.textContent = userInput;

{
  // ! `textContent` renders user input as plain text, while `innerHTML` parses markup.
  // * This side-by-side demo shows why `innerHTML` must never be fed unsanitized user input.
  const htmlDemoWithTextContent = document.createElement("p");
  htmlDemoWithTextContent.textContent = "<strong>Hello</strong> world";
  paraContainer.appendChild(htmlDemoWithTextContent);

  const htmlDemoWithInnerHTML = document.createElement("p");
  htmlDemoWithInnerHTML.innerHTML = "<strong>Hello</strong> world";
  paraContainer.appendChild(htmlDemoWithInnerHTML);
}

// # Event Listeners
const changeColorBtn = document.querySelector("#change-color-btn");

const onClick = () => {
  // * Toggling state demonstrates event-driven UI updates from a single source of truth.
  const newColor = subheading.style.color === "blue" ? "red" : "blue";
  console.log(newColor);
  subheading.style.color = newColor;
};

changeColorBtn.addEventListener("click", onClick);

// # FORMS
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("form first input value:", event.target[0].value);
  console.log("form named control value:", event.target["new-paragraph"].value);
  const newParagraph = event.target["new-paragraph"].value.trim();

  // Multiple validation checks
  if (!newParagraph) {
    alert("Please enter a text");
    return;
  }

  if (newParagraph.length < 3) {
    alert("Text must be at least 3 characters long");
    return;
  }

  if (newParagraph.length > 100) {
    alert("Text must be less than 100 characters");
    return;
  }

  // Security: Basic XSS prevention check
  if (newParagraph.includes("<script>")) {
    alert("Invalid input detected");
    return;
  }

  createPara(newParagraph);

  event.target.reset();
});

window.addEventListener("load", (loadEvent) => {
  console.log(loadEvent);
  console.log("Page has been loaded (event object demo)");
});
