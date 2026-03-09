import { useEffect, useState } from "react";

import AddEntryModal from "./components/AddEntryModal";
import EntryList from "./components/EntryList";
import Header from "./components/Header";
import ViewEntryModal from "./components/ViewEntryModal";

function App() {
  // State management - data that can change and affects what is rendered
  const [entries, setEntries] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Load entries from localStorage on component mount
  useEffect(() => {
    const storedEntries = localStorage.getItem("diary-entries");
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []); // Empty array means this runs only once on mount

  const handleAddEntry = (newEntry) => {
    // Create new array instead of modifying original (immutability principle)
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);

    // Persist to localStorage (must convert to JSON string)
    localStorage.setItem("diary-entries", JSON.stringify(updatedEntries));
  };

  const handleDeleteEntry = (entryDate) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      // Filter creates new array with all entries except the one to delete
      const updatedEntries = entries.filter(
        (entry) => entry.date !== entryDate,
      );
      setEntries(updatedEntries);

      localStorage.setItem("diary-entries", JSON.stringify(updatedEntries));
      setIsViewModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onAddEntryClick={() => setIsAddModalOpen(true)} />

      <main className="p-4">
        <EntryList
          entries={entries}
          onViewEntryClick={(entry) => {
            setSelectedEntry(entry);
            setIsViewModalOpen(true);
          }}
        />
      </main>

      <AddEntryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddEntry={handleAddEntry}
        entries={entries}
      />

      <ViewEntryModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        entry={selectedEntry}
        onDeleteEntry={handleDeleteEntry}
      />
    </div>
  );
}

export default App;
