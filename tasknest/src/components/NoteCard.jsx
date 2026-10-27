const cardThemes = [
  "note-theme-blue",
  "note-theme-purple",
  "note-theme-green",
  "note-theme-orange",
];

function NoteCard({ note, index, onEdit, onDelete }) {
  const formattedDate = new Date(note.updatedAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  const theme = cardThemes[index % cardThemes.length];

  return (
    <article className={`note-card ${theme}`}>
      <div className="note-card-top">
        <span className="note-category">{note.category}</span>

        <div className="note-card-actions">
          <button
            type="button"
            onClick={() => onEdit(note)}
            aria-label={`Edit ${note.title}`}
            title="Edit note"
          >
            ✎
          </button>

          <button
            type="button"
            onClick={() => onDelete(note.id)}
            aria-label={`Delete ${note.title}`}
            title="Delete note"
          >
            ×
          </button>
        </div>
      </div>

      <h3>{note.title}</h3>

      <p className="note-card-content">{note.content}</p>

      <div className="note-card-footer">
        <span>Updated {formattedDate}</span>
        <span className="note-footer-symbol">✦</span>
      </div>
    </article>
  );
}

export default NoteCard;