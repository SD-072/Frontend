import { LOCALSTORAGE_TASKS } from "./config.js";
import { createLi, renderStorage } from "./ui.js";
import { getFromStorage, writeToStorage } from "./utils.js";

const form = document.querySelector("form");
const userInput = document.getElementById("userInput");

// Form Submit

const handleFormSubmit = (e) => {
  e.preventDefault();

  const inputVal = userInput.value.trim();

  if (!inputVal) {
    alert("Input field cannot be empty");
    return;
  }

  const newTask = {
    content: inputVal,
    id: "task-" + crypto.randomUUID(),
  };

  // let tasks = localStorage.getItem('tasks');
  // if (!tasks) {
  //   tasks = [];
  // } else {
  //   tasks = JSON.parse(tasks);
  // }
  const tasks = getFromStorage(LOCALSTORAGE_TASKS);
  tasks.push(newTask);
  writeToStorage(LOCALSTORAGE_TASKS, tasks);

  // UI aktualisieren
  createLi(newTask);

  // Form reset
  form.reset();
};

// Event Listener
form.addEventListener("submit", handleFormSubmit);
// document.addEventListener('DOMContentLoaded', renderStorage);
// window.addEventListener('load', renderStorage);
renderStorage();
