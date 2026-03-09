function EntryCard({ entry, onViewEntryClick }) {
  return (
    <button
      type="button"
      className="card bg-base-100 cursor-pointer shadow-xl transition-shadow hover:shadow-2xl text-left w-full"
      onClick={onViewEntryClick}
    >
      <figure>
        <img
          src={entry.image || "https://picsum.photos/400/225"} // Fallback to placeholder if no image
          alt={entry.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{entry.title}</h2>
        <p>{new Date(entry.date).toLocaleDateString()}</p>{" "}
        {/* Format date for display */}
      </div>
    </button>
  );
}

export default EntryCard;
