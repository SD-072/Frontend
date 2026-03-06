import { use } from "react";
import { TodoReducerContext } from "../contexts/todo-reducer-context";

const FilterComponent = () => {
  // # Sharing view state across components
  // * The filter belongs in shared state because multiple components care about the same current view of the todo list.
  // ! If the filter lived only inside this component, the rest of the app would have no reliable way to react to it.
  const { setFilter } = use(TodoReducerContext);

  return (
    <div className="mb-4 flex space-x-2">
      <button
        type="button"
        onClick={() => setFilter("all")}
        className="bg-gray-900 px-3 py-1 rounded cursor-pointer"
      >
        All
      </button>
      <button
        type="button"
        onClick={() => setFilter("active")}
        className="bg-gray-900 px-3 py-1 rounded cursor-pointer"
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => setFilter("completed")}
        className="bg-gray-900 px-3 py-1 rounded cursor-pointer"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
