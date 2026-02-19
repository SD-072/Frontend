// Constant for the localStorage key to avoid typos
const LOCALSTORAGE_TASKS = "tasks";

// DOM
const form = document.querySelector("form");
const userInput = document.getElementById("userInput");
const ul = document.querySelector("ul");
const reloadBtn = document.getElementById("reload");

// Helper function: Read data from localStorage and return it as an array
// If nothing is stored, an empty array is returned
const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];

// Helper function: Store data in localStorage as a JSON string
const writetoStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Form submit
const handleformSubmit = (e) => {
  e.preventDefault(); // Prevents default form behavior (page reload)

  const inputVal = userInput.value.trim();

  // Validation: Prevent empty input
  if (!inputVal) {
    alert("Input field cannot be empty");
    return;
  }

  // Create a new task object with a unique ID
  const newTask = {
    content: inputVal,
    id: "task-" + crypto.randomUUID(),
  };

  // Manual variant without helper function and ?? operator
  // let tasks = localStorage.getItem('tasks');
  // if (!tasks) {
  //   tasks = [];
  // } else {
  //   tasks = JSON.parse(tasks);
  // }

  // Reading
  const tasks = getFromStorage(LOCALSTORAGE_TASKS);
  // Modifying
  tasks.push(newTask);
  // Writing
  writetoStorage(LOCALSTORAGE_TASKS, tasks);

  // Update UI
  createLi(newTask);

  // Reset form (clear input field)
  form.reset();
  // userInput.value = ""
};

// Create li
const createLi = (task) => {
  // Create DOM elements for a task
  const newLi = document.createElement("li");
  const newP = document.createElement("p");
  const deleteBtn = document.createElement("button");

  newLi.className = "flex justify-between gap-4 px-4 items-baseline";
  newP.textContent = task.content;
  deleteBtn.className = "bg-red-500 hover:bg-red-400 text-white rounded px-4 py-2 mt-5";
  deleteBtn.textContent = "Delete";

  // Delete functionality: Remove task from localStorage
  deleteBtn.addEventListener("click", () => {
    const tasks = getFromStorage(LOCALSTORAGE_TASKS);

    // Keep all tasks except the deleted one
    // (task is available here in scope -> Closure)
    const updatedTasks = tasks.filter((t) => t.id !== task.id);

    writetoStorage(LOCALSTORAGE_TASKS, updatedTasks);

    // Remove element from the DOM
    newLi.remove();
  });

  // Assemble elements
  newLi.append(newP, deleteBtn);
  // Insert at the beginning of the list (newest tasks on top)
  ul.prepend(newLi);
};

// renderStorage
// When the page loads: Display all stored tasks from localStorage
const renderStorage = () => {
  const tasks = getFromStorage(LOCALSTORAGE_TASKS);

  tasks.forEach((t) => {
    createLi(t);
  });
};

// Event listener
form.addEventListener("submit", handleformSubmit);

// Alternative event listeners:
// document.addEventListener('DOMContentLoaded', renderStorage); // Waits for DOM
// window.addEventListener('load', renderStorage); // Waits for all resources

// With defer or type="module", direct execution is also safe
renderStorage();
