const FilterComponent = ({ setFilter }) => {
  const setFilterInView = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="mb-4 flex space-x-2">
      <button
        type="button"
        onClick={() => setFilterInView("all")}
        className="bg-gray-900 px-3 py-1 rounded cursor-pointer"
      >
        All
      </button>
      <button
        type="button"
        onClick={() => setFilterInView("active")}
        className="bg-gray-900 px-3 py-1 rounded cursor-pointer"
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => setFilterInView("completed")}
        className="bg-gray-900 px-3 py-1 rounded cursor-pointer"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
