import { use } from "react";
import { TodoReducerContext } from "../contexts/todo-reducer-context";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const { todos, filter } = use(TodoReducerContext);

  // # Deriving UI from shared state
  // * Filtering is derived data: the source of truth stays in context, and the list decides what should be visible right now.
  // ! Avoid storing both the full list and a second filtered list in state. Duplicated state drifts out of sync fast.
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed" && todo.completed) return true;
    if (filter === "active" && !todo.completed) return true;
    return false;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
