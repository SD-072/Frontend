import { LOCALSTORAGE_TASKS } from "./config.js";
import { getFromStorage, writeToStorage } from "./utils.js";

const ul = document.querySelector("ul");

const createLi = (task) => {
  const newLi = document.createElement("li");
  const newP = document.createElement("p");
  const deleteBtn = document.createElement("button");

  newLi.className = "flex gap-4 items-baseline px-4 justify-between";

  newP.textContent = task.content;
  deleteBtn.className = "mt-5 px-4 py-2 bg-red-500 hover:bg-red-500 text-white rounded";

  deleteBtn.textContent = "Delete";

  const someSpan = document.createElement("span");

  someSpan.textContent = "🤷";
  deleteBtn.appendChild(someSpan);

  deleteBtn.addEventListener("click", (e) => {
    // console.log(e.target);
    // console.log(e.target.closest('button'));
    const tasks = getFromStorage(LOCALSTORAGE_TASKS);
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    writeToStorage(LOCALSTORAGE_TASKS, updatedTasks);

    newLi.remove();
  });

  newLi.appendChild(newP);
  newLi.appendChild(deleteBtn);

  ul.prepend(newLi);
};

// renderStorage

const renderStorage = () => {
  const tasks = getFromStorage(LOCALSTORAGE_TASKS);
  tasks.forEach((t) => {
    createLi(t);
  });
};

export { createLi, renderStorage };
