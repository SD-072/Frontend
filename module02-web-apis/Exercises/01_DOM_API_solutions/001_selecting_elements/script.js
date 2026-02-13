// # DOM ELEMENT SELECTION AND MANIPULATION
// * Learning Concept: Using querySelector/querySelectorAll to select elements and modify them

// # TASK 1: Select Elements and Log to Console

// * querySelector() - Returns the FIRST element matching the CSS selector
const heading = document.querySelector(".hero-content h1");
console.log(heading);

// * querySelectorAll() - Returns a NodeList containing ALL matching elements
// ! Important: NodeList is array-like but not a true array (though it has forEach)
const navLinks = document.querySelectorAll(".nav-list a");
console.log(navLinks);

// # TASK 2: Select Button Element
const btn = document.querySelector(".hero-content .btn");

// * Alternative approach using getElementsByClassName (returns HTMLCollection)
// const btn2 = document.getElementsByClassName("btn")[0];

// * Log the text content of the button
console.log(btn.textContent);

// # TASK 3: Modify Styles Using JavaScript

// * Change background color using element.style property
const header = document.querySelector(".header");
header.style.backgroundColor = "#b5651d";

// * Modify font size using camelCase CSS properties
// ! Note: CSS property names in JS use camelCase (font-size becomes fontSize)
heading.style.fontSize = "3rem";

// * Iterate through NodeList to apply styles to multiple elements
// * forEach is available on NodeLists (not on HTMLCollections from getElementsByClassName)
navLinks.forEach((link) => (link.style.color = "#faf0e6"));

// Alternative iteration approach using for...of loop
// for (const element of navLinks) {
//   element.style.color = "#faf0e6";
// }

// # TASK 4: Add Content Dynamically

// * Select container element
const hero = document.querySelector(".hero-content");

// * Create new paragraph element
const newP = document.createElement("p");

// * Set text content of the new element
newP.textContent = "Open daily from 7 AM to 9 PM.";

// * Append the new element to the DOM
// * append() adds the element as the LAST child
hero.append(newP);

// * Key takeaways:
// * - querySelector/querySelectorAll use CSS selectors (., #, element, etc.)
// * - querySelectorAll returns NodeList, getElementsByClassName returns HTMLCollection
// * - element.style allows inline style modification (but CSS classes are often better)
// * - DOM manipulation happens in real-time - changes are immediately visible
