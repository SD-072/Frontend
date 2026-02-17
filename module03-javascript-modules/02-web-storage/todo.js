// # localStorage with a Todo App — JSON Serialization
// * localStorage can only store strings.
// * To store arrays/objects, serialize with JSON.stringify() before setItem,
// * and deserialize with JSON.parse() after getItem.

const form = document.querySelector("form");
const todoContainer = document.getElementById("todo-container");

// # Helper — Create a Todo DOM Element
// * Extracted into its own function so both "submit" and "load" can reuse it.
const createTodo = (todoText) => {
  const todo = document.createElement("li");
  todo.textContent = todoText;
  todoContainer.prepend(todo);
};

// # Submit Handler — Add a New Todo
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // * 1. Read the input value from the form
  const inputValue = event.target["todo-input"].value;

  // * 2. Render it to the DOM immediately
  createTodo(inputValue);

  // * 3. Clear the input field
  event.target["todo-input"].value = "";

  // * 4. Persist to localStorage
  // ! We must read the existing array FIRST, push to it, then overwrite.
  // ! If we skip reading, we lose every previous todo.
  let todoArray = [];

  if (localStorage.getItem("todos")) {
    // * 5. Retrieve the stored JSON string
    const allTodosJSON = localStorage.getItem("todos");
    // * 6. Deserialize back into a JavaScript array
    const existingTodos = JSON.parse(allTodosJSON);
    // * 7. Spread existing todos into our working array
    todoArray = [...existingTodos];
  }

  // * 8. Append the new value
  todoArray.push(inputValue);

  // * 9. Serialize the updated array and overwrite localStorage
  localStorage.setItem("todos", JSON.stringify(todoArray));
});

// # Page Load — Restore Todos from localStorage
// * Without this, the DOM would be empty on every refresh even though data is stored.
window.addEventListener("load", () => {
  // ! Always check for null before calling JSON.parse — parsing null throws an error.
  if (localStorage.getItem("todos")) {
    const allTodosJSON = localStorage.getItem("todos");
    const existingTodos = JSON.parse(allTodosJSON);

    existingTodos.forEach((element) => {
      createTodo(element);
    });
  }
});
