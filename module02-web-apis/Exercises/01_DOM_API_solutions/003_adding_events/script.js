// # EVENT HANDLING WITH ADDEVENTLISTENER
// * Learning Concept: Attaching event listeners, handling user interactions, and understanding event delegation

// # Task Array - Random tasks to add to the list
const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];

// # DOM Element Selection
const addBtn = document.getElementById("add-item-btn");
const alertBtn = document.getElementById("alert-btn");
const logBtn = document.getElementById("console-btn");
const itemList = document.getElementById("item-list");

// # State Management - Track added tasks
const taskArray = [];

// # EVENT 1: Add Item Button
// * addEventListener() is the modern, recommended way to attach events
// * Advantages: Can add multiple listeners, better control, can remove listeners

addBtn.addEventListener("click", () => {
  // * Generate random index to pick a random task
  const randomIndex = Math.floor(Math.random() * tasks.length);
  const randomTask = tasks[randomIndex];

  // * Create new list item element
  const li = document.createElement("li");
  li.textContent = randomTask;

  // * Append to list
  itemList.append(li);

  // * Scroll to the newly added item for better UX
  // ! scrollIntoView() ensures the last item is always visible
  li.scrollIntoView({ behavior: "smooth" });

  // * Track the task in our array for the alert button
  taskArray.push(li.textContent);
});

// # EVENT 2: Alert Button
// * Named function vs arrow function - both work with addEventListener
alertBtn.addEventListener("click", handleClickAlert);

function handleClickAlert() {
  if (taskArray.length > 0) {
    // * Join array elements with comma separator for display
    alert(`Warning: ${taskArray.join(", ")}`);
  } else {
    alert("No to-do list");
  }
}

// # EVENT 3: Console Log Button
// * Arrow function inline - good for simple one-liners
logBtn.addEventListener("click", () => console.log("hehe"));

// # addEventListener vs onclick Property
// * Question from the exercise: What's the difference?

// * APPROACH 1: addEventListener() (RECOMMENDED)
// * - Can attach multiple listeners to the same element
// * - More control (can remove with removeEventListener)
// * - Doesn't overwrite existing handlers
// element.addEventListener("click", handler1);
// element.addEventListener("click", handler2); // Both will run!

// * APPROACH 2: onclick property (LEGACY)
// * - Only ONE handler per element
// * - Second assignment overwrites the first
// * - Less flexible but simpler syntax
// element.onclick = handler1;
// element.onclick = handler2; // Overwrites handler1!

// ! Best Practice: Always use addEventListener() in modern JavaScript
// * It's more powerful, flexible, and follows the principle of separation of concerns

// * Key Takeaways:
// * - addEventListener(type, listener) is the standard way to handle events
// * - Events can trigger any JavaScript code (DOM manipulation, logging, alerts, etc.)
// * - Event listeners make web pages interactive and responsive to user actions
// * - You can use named functions or arrow functions as event handlers
