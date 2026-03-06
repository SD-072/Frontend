import { useState } from "react";
import { TodoContext } from "./todo-context";

const getStoredTodos = () => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

export default function TodoContextProvider({ children }) {
  // # React Context with useState
  // * This provider shows the lighter version of shared state management: good for simple apps before reducer-style updates are needed.
  // ! Context removes prop drilling, but it does not replace careful state design. Keep the value shape small and intentional.
  const [todos, setTodos] = useState(() => getStoredTodos());
  const [filter, setFilter] = useState("all"); // "all", "active", "complete"

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      const updatedTodos = [
        { id: Date.now(), text, completed: false },
        ...prevTodos,
      ];

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const setFilterInView = (filter) => {
    setFilter(filter);
  };

  return (
    <TodoContext
      value={{
        todos,
        setTodos,
        addTodo,
        filter,
        setFilter,
        toggleTodo,
        setFilterInView,
      }}
    >
      {children}
    </TodoContext>
  );
}
