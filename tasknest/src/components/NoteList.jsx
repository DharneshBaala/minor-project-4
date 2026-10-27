import NoteCard from "./NoteCard";

function NoteList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className="notes-empty-state">
        <div className="notes-empty-symbol">✧</div>

        <h3>No notes found</h3>

        <p>
          {`${
            "Try another search or category, or create a new note above."
          }`}
        </p>
      </div>
    );
  }

  return (
    <div className="notes-grid">
      {notes.map((note, index) => (
        <NoteCard
          key={note.id}
          note={note}
          index={index}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteList;