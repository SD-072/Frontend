import { use } from "react";
import { TodoReducerContext } from "../contexts/todo-reducer-context";

const ToDoItem = ({ todo }) => {
  // # Reading and updating one shared item
  // * Each item receives its own data, but the completed state still updates the single shared source of truth in context.
  // ! A checkbox should reflect state, not manage its own separate truth. Controlled inputs prevent UI and data from diverging.
  const { toggleTodo } = use(TodoReducerContext);

  return (
    <li className="flex items-center mb-2">
      <label>
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
    </li>
  );
};

export default ToDoItem;
