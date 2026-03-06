import { useEffect, useReducer } from "react";
import { TodoReducerContext } from "./todo-reducer-context";

const getStoredTodos = () => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

// # React Context + useReducer
// * This pattern keeps all state transitions in one place, which makes shared UI state easier to reason about as the app grows.
// ! Reducers must stay predictable. Return new state objects instead of mutating the existing state in place.
const initialState = {
  todos: getStoredTodos(),
  filter: "all", // "all", "active", "complete"
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo = {
        id: Date.now(), // or uuid
        text: action.payload,
        completed: false,
      };
      return { ...state, todos: [newTodo, ...state.todos] };
    }
    case "FILTER_TODO": {
      return { ...state, filter: action.payload };
    }
    case "TOGGLE_TODO": {
      const todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
      return { ...state, todos };
    }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export default function TodoReducerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  function addTodo(text) {
    dispatch({ type: "ADD_TODO", payload: text });
  }

  function setFilter(filter) {
    dispatch({ type: "FILTER_TODO", payload: filter });
  }

  function toggleTodo(id) {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }

  return (
    <TodoReducerContext
      value={{
        todos: state.todos,
        filter: state.filter,
        addTodo,
        setFilter,
        toggleTodo,
      }}
    >
      {children}
    </TodoReducerContext>
  );
}
