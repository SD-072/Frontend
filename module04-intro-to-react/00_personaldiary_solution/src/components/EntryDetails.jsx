function EntryDetails({ entry, onDeleteEntry }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{entry.title}</h3>
      <p className="py-4">{new Date(entry.date).toLocaleDateString()}</p>
      <figure>
        <img
          src={entry.image || "https://picsum.photos/400/225"}
          alt={entry.title}
          className="h-auto w-full rounded-lg"
        />
      </figure>
      <p className="py-4">{entry.content}</p>

      <button
        className="btn btn-error"
        onClick={() => onDeleteEntry(entry.date)}
      >
        Delete Entry
      </button>
    </div>
  );
}

export default EntryDetails;
