import { useState } from "react";

function EntryForm({ onAddEntry, onClose, entries }) {
    // Controlled components - React state is the single source of truth for input values
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");


  const handleFormAction = async (formData) => {
    const title = formData.get("title");
    const date = formData.get("date");
    const image = formData.get("image");
    const content = formData.get("content");

      // Basic form validation
    if (!title || !date || !content) {
      alert("Please fill in all required fields (Title, Date, Content).");
      return; 
    }

        // Check for duplicate dates (one entry per day rule)
    const existingEntry = entries.find((entry) => entry.date === date);
    if (existingEntry) {
      alert(
        "An entry for this date already exists. Please choose another date.",
      );
      return; 
    }
    const newEntry = { title, date, image, content };
    onAddEntry(newEntry);
    onClose();
  };

  return (
     <form action={handleFormAction} className="space-y-4 py-4">
      <div>
        <label htmlFor="title" className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label htmlFor="date" className="label">
          <span className="label-text">Date</span>
        </label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label htmlFor="image" className="label">
          <span className="label-text">Image URL (Optional)</span>
        </label>
        <input
          id="image"
          type="text"
          name="image"
          placeholder="https://example.com/image.jpg"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label htmlFor="content" className="label">
          <span className="label-text">Content</span>
        </label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea textarea-bordered w-full"
          rows="4"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Add Entry
      </button>
    </form>
  );
}

export default EntryForm;
