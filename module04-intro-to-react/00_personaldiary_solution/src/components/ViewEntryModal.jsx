import EntryDetails from "./EntryDetails";

function ViewEntryModal({ isOpen, onClose, entry, onDeleteEntry }) {
  // Conditional rendering - return null if modal shouldn't be open or no entry selected
  if (!isOpen || !entry) {
    return null;
  }

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <EntryDetails entry={entry} onDeleteEntry={onDeleteEntry} />
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewEntryModal;
