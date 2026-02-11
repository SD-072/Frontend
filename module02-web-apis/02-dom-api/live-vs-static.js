// # Learning Concept: Live HTMLCollection vs Static NodeList
// * Why this matters: Choosing the wrong collection can produce stale UI counts and confusing bugs.

const addBtn = document.getElementById("add");
const paraContainer = document.querySelector("div");
const htmlCollection = document.getElementsByClassName("para");

console.log("HTMLCollection length (live):", htmlCollection);

const nodeList = document.querySelectorAll(".para");
console.log("NodeList length (static snapshot):", nodeList);
// ! Gotcha: `querySelectorAll` returns a static snapshot; it does not auto-update after DOM changes.

addBtn.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "Para three";
  newPara.classList.add("para");

  paraContainer.appendChild(newPara);

  const todoCount = document.getElementById("todo-count");
  todoCount.textContent = htmlCollection.length;
});
