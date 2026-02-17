// You can work here or download the template
const todoListElement = document.getElementById("todo-list");

// Function to fetch todos from the JSON Placeholder API
async function fetchTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    displayTodos(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

// Function to display todos in the DOM
function displayTodos(todos) {
  // Clear existing todos
  todoListElement.innerHTML = "";

  // Loop through the todos and create list items for each
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.title;
    todoItem.classList.add("mb-2");
    if (todo.completed) {
      todoItem.classList.add("line-through", "text-green-500");
    } else {
      todoItem.classList.add("text-red-500");
    }
    todoListElement.appendChild(todoItem);
  });
}

// Fetch and display todos on page load
fetchTodos();
