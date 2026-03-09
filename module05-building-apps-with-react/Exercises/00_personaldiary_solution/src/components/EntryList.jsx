import EntryCard from "./EntryCard";

function EntryList({ entries, onViewEntryClick }) {
  // Sort entries by date (newest first) - create copy to avoid mutating original
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sortedEntries.map((entry) => (
        <EntryCard
          key={entry.date} // React needs stable, unique keys for efficient rendering
          entry={entry}
          onViewEntryClick={() => onViewEntryClick(entry)}
        />
      ))}
    </div>
  );
}

export default EntryList;
