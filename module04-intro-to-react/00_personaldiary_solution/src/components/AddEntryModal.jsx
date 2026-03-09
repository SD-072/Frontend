import EntryForm from "./EntryForm";

function AddEntryModal({ isOpen, onClose, onAddEntry, entries }) {
  // Conditional rendering - return null if modal shouldn't be open
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Add New Diary Entry</h3>

        <EntryForm
          onAddEntry={onAddEntry}
          onClose={onClose}
          entries={entries}
        />

        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEntryModal;
