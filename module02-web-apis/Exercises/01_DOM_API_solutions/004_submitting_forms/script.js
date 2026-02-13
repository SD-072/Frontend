// # FORM VALIDATION WITH DOM MANIPULATION
// * Learning Concept: Handling form submissions, validating user input, and manipulating the DOM based on validation results

// # DOM Element Selection
const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageTextArea = document.querySelector("#message");
const output = document.querySelector("#output");

// # Form Submit Event Handler
contactForm.addEventListener("submit", (event) => {
  // * Prevent default form submission behavior (page reload)
  event.preventDefault();

  // * Extract and sanitize user input using trim() to remove whitespace
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageTextArea.value.trim();

  console.log(name, email, message);

  // # APPROACH 1: Simple if/else validation
  // * Best for: Simple forms with basic validation needs
  // * Pros: Easy to read, straightforward logic flow
  // * Cons: Returns on first error only, harder to add specific error messages per field

  // if (!name || !email || !message) {
  //   output.textContent = "Please fill out all fields";
  //   output.classList.remove("bg-green-500");
  //   output.classList.add("bg-red-500");
  // } else {
  //   output.innerHTML = `
  //     <ul>
  //       <li>${name}</li>
  //       <li>${email}</li>
  //       <li>${message}</li>
  //     </ul>
  //   `;
  //   output.classList.remove("bg-red-500");
  //   output.classList.add("bg-green-500");
  //   contactForm.reset();
  // }

  // # APPROACH 2: try/catch with Error throwing (ACTIVE)
  // * Best for: Complex forms, specific error messages per field
  // * Pros: More control over error flow, can throw errors from helper functions, better for scalability
  // * Cons: Slightly more verbose for simple cases

  try {
    // ! Validation checks - throws Error on first failed validation
    if (!name) {
      throw new Error("Name is required");
    }

    if (!email) {
      throw new Error("Email is required");
    }

    if (!message) {
      throw new Error("Message is required");
    }

    // * SUCCESS CASE: Display submitted data in a list
    output.innerHTML = `<ul>
          <li>${name}</li>
          <li>${email}</li>
          <li>${message}</li>
          </ul>`;

    // * Toggle CSS classes for visual feedback
    output.classList.remove("bg-red-500");
    output.classList.add("bg-green-500");

    // * Clear form fields after successful submission
    contactForm.reset();
  } catch (error) {
    // * ERROR CASE: Display specific error message
    output.textContent = error.message;

    // * Toggle CSS classes for error state
    output.classList.remove("bg-green-500");
    output.classList.add("bg-red-500");
  }
});

// * Real-world note: In production, we'd use the Fetch API to send this data to a backend server
// * for processing, storage, authentication, payments, etc.
