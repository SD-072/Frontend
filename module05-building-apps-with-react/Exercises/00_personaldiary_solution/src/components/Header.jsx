function Header({ onAddEntryClick }) {
  return (
    <header className="flex items-center justify-between bg-blue-500 p-4 text-white shadow-md">
      <h1 className="text-2xl font-bold">Personal Diary</h1>

      <button
        onClick={onAddEntryClick} // Prop drilling - function passed from parent
        className="rounded bg-white px-4 py-2 font-bold text-blue-500 transition hover:bg-gray-200"
      >
        Add Entry
      </button>
    </header>
  );
}

export default Header;
