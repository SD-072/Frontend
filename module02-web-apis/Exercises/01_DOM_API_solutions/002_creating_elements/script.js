// # CREATING ELEMENTS DYNAMICALLY WITH JAVASCRIPT
// * Learning Concept: Building an entire webpage from scratch using only JavaScript
// * This demonstrates the power of the DOM API for dynamic content generation

// # Select the body element as our root container
const body = document.querySelector("body");

// # STEP 1: Create Header Structure

const header = document.createElement("header");
const nav = document.createElement("nav");

// # STEP 2: Create Logo Link with Multiple Class Manipulation Methods

const logo = document.createElement("a");

// * Method 1: Using className (overwrites existing classes)
// logo.className = "logo";

// * Method 2: Using className += (appends but adds extra space)
// logo.className += " bg-red-500";

// * Method 3: Using setAttribute (most explicit, but verbose)
logo.setAttribute("class", "logo bg-red-500");

// * Method 4: Using classList (most flexible - recommended!)
// logo.classList.add("logo");

// ! Demonstration: Remove the red background we just added
logo.classList.remove("bg-red-500");

// * Set the logo text content
logo.textContent = "Coffee Shop";

// # STEP 3: Create Navigation List

const navList = document.createElement("ul");
navList.className = "nav-list";

// * Append elements to DOM in hierarchical order
body.append(header);
header.append(nav);
nav.append(logo, navList);

// # STEP 4: Create Navigation Items Dynamically Using Array

const navArray = ["Home", "Menu", "About", "Contact"];

// * Loop through array and create li/a elements for each nav item
navArray.forEach((navText) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.textContent = navText;

  // * Apply inline styles (normally CSS classes would be better)
  li.style.marginLeft = "1.5rem";
  a.style.textDecoration = "none";
  a.style.color = "#333";
  a.style.fontWeight = "bold";

  navList.append(li);
  li.append(a);
});

// # STEP 5: Create Hero Section

const hero = document.createElement("section");
hero.className = "hero";
body.appendChild(hero); // * appendChild() also works (but append() is more modern)

const heroContent = document.createElement("div");
heroContent.className = "hero-content";
hero.appendChild(heroContent);

const h1 = document.createElement("h1");
h1.textContent = "Welcome to Our Coffee Shop";
heroContent.appendChild(h1);

const p = document.createElement("p");
p.textContent = "Enjoy the best coffee in town.";
heroContent.appendChild(p);

const btn = document.createElement("a");
btn.textContent = "Explore Our Menu";
heroContent.appendChild(btn);

// # STEP 6: Create Footer

const footer = document.createElement("footer");
footer.className = "footer";
body.appendChild(footer);

const footerP = document.createElement("p");
footerP.textContent = "©2026 Coffee Shop. All rights reserved.";
footer.appendChild(footerP);

// # STEP 7: Apply CSS Styles Using JavaScript
// ! In production, use CSS files - this is purely educational

// * Header Styles
header.style.backgroundColor = "#fff";
header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
header.style.padding = "1rem 0";

// * Nav Styles (Flexbox Layout)
nav.style.display = "flex";
nav.style.justifyContent = "space-between"; // horizontal alignment
nav.style.alignItems = "center"; // vertical alignment
nav.style.maxWidth = "1200px";
nav.style.margin = "0 auto";
nav.style.padding = "0 1rem";

// * Logo Styles
logo.style.fontSize = "1.5rem";
logo.style.fontWeight = "bold";
logo.style.color = "#333";
logo.style.textDecoration = "none";

// * Nav List Styles
navList.style.display = "flex";
navList.style.listStyle = "none"; // removes bullet points

// * Hero Section Styles (Background Image)
hero.style.height = "560px";
hero.style.background =
  'url("https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1") no-repeat center center/cover';
hero.style.color = "#fff";

// * Hero Content Styles (Flexbox Centering)
heroContent.style.maxWidth = "600px";
heroContent.style.height = "100%";
heroContent.style.display = "flex";
heroContent.style.flexDirection = "column"; // stack vertically
heroContent.style.justifyContent = "space-around";
heroContent.style.alignItems = "center";
heroContent.style.textAlign = "center";

// * Hero Text Styles
h1.style.fontSize = "2.5rem";
h1.style.marginBottom = "1rem";

p.style.fontSize = "1.2rem";
p.style.marginBottom = "2rem";

// * Button Styles
btn.style.backgroundColor = "#333";
btn.style.color = "#fff";
btn.style.padding = "0.75rem 1.5rem";
btn.style.textDecoration = "none";
btn.style.borderRadius = "5px";
btn.style.transition = "background-color 0.3s ease"; // smooth color transition

// * Button Hover Effect Using Event Listeners
// ! CSS :hover doesn't work with inline styles, so we use events
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "#555";
});

btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "#333";
});

// * Footer Styles
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "1rem 0";
footer.style.marginTop = "auto";

// * Key Takeaways:
// * - createElement() creates detached elements (must append to DOM to see them)
// * - append() can take multiple arguments, appendChild() takes one
// * - classList is the best way to manage classes (add, remove, toggle)
// * - element.style is verbose for production but great for learning
// * - This exercise shows the DOM API's power but CSS + HTML is more maintainable!
