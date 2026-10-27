import { useEffect, useState } from "react";

function NoteForm({
  editingNote,
  onAddNote,
  onUpdateNote,
  onCancelEdit,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setCategory(editingNote.category);
    } else {
      setTitle("");
      setContent("");
      setCategory("Personal");
    }
  }, [editingNote]);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      return;
    }

    const noteData = {
      title: trimmedTitle,
      content: trimmedContent,
      category,
    };

    if (editingNote) {
      onUpdateNote({
        ...editingNote,
        ...noteData,
      });
    } else {
      onAddNote(noteData);
    }

    setTitle("");
    setContent("");
    setCategory("Personal");
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="note-form-heading">
        <div>
          <span className="note-form-eyebrow">
            {editingNote ? "REFINE YOUR THOUGHTS" : "CAPTURE AN IDEA"}
          </span>

          <h3>{editingNote ? "Edit your note" : "Create a new note"}</h3>
        </div>

        <span className="note-form-symbol">✎</span>
      </div>

      <div className="note-form-fields">
        <div className="form-field">
          <label htmlFor="note-title">Title</label>

          <input
            id="note-title"
            type="text"
            placeholder="Give your note a title..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={120}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="note-category">Category</label>

          <select
            id="note-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
            <option value="Ideas">Ideas</option>
          </select>
        </div>

        <div className="form-field note-content-field">
          <label htmlFor="note-content">Your thoughts</label>
<textarea
  id="note-content"
  placeholder="Write something worth remembering..."
  value={content}
  onChange={(event) => {
    console.log("Typing:", event.target.value);
    setContent(event.target.value);
  }}
  rows={4}
  maxLength={10000}
  required
  disabled={false}
/>
        </div>
      </div>

      <div className="form-actions">
        {editingNote && (
          <button
            type="button"
            className="secondary-button"
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        )}

        <button type="submit" className="primary-button">
          {editingNote ? "Save changes" : "+ Create note"}
        </button>
      </div>
    </form>
  );
}

export default NoteForm;