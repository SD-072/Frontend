import { use, useState } from "react";
import { TodoReducerContext } from "../contexts/todo-reducer-context";

const AddToDo = () => {
  const [newTodo, setNewTodo] = useState("");

  // # Dispatching shared updates
  // * The form only cares about the intent to add a task. Context handles how the shared state changes.
  // ! Keep submit handlers focused on validation and intent. Pushing full state logic into components makes them harder to reuse.
  const { addTodo } = use(TodoReducerContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return alert("Please enter a to-do item");

    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        name="todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new to-do"
        className="flex-1 border rounded px-2 py-1 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default AddToDo;
