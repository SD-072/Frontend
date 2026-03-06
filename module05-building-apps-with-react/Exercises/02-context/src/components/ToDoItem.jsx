import { use } from "react";
import { TodoReducerContext } from "../contexts/todo-reducer-context";

const ToDoItem = ({ todo }) => {
  // # Reading and updating one shared item
  // * Each item receives its own data, but the completed state still updates the single shared source of truth in context.
  // ! A checkbox should reflect state, not manage its own separate truth. Controlled inputs prevent UI and data from diverging.
  const { toggleTodo, deleteTodo } = use(TodoReducerContext);

  return (
    <li className="mb-2 flex items-center justify-between gap-3 rounded border px-3 py-2">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2 cursor-pointer"
        />
        <span className={todo.completed ? "line-through" : ""}>
          {todo.text}
        </span>
      </label>
      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="cursor-pointer rounded bg-red-500 px-3 py-1 text-white"
      >
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
