import { useEffect, useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

function NotesApp() {
  const [notes, setNotes] = useState(() => {
  const savedNotes = localStorage.getItem("tasknest-notes");

  return savedNotes ? JSON.parse(savedNotes) : [];
});

  useEffect(() => {
  localStorage.setItem("tasknest-notes", JSON.stringify(notes));

  window.dispatchEvent(new Event("tasknest-notes-updated"));
}, [notes]);   

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingNote, setEditingNote] = useState(null);

  const categories = [
    "All",
    "Personal",
    "Work",
    "Study",
    "Ideas",
  ];

  function addNote(noteData) {
    const newNote = {
      id: crypto.randomUUID(),
      title: noteData.title,
      content: noteData.content,
      category: noteData.category,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setNotes((previousNotes) => [newNote, ...previousNotes]);
  }

  function deleteNote(noteId) {
    setNotes((previousNotes) =>
      previousNotes.filter((note) => note.id !== noteId)
    );

    if (editingNote?.id === noteId) {
      setEditingNote(null);
    }
  }

  function startEditing(note) {
    setEditingNote(note);
  }

  function updateNote(updatedNote) {
    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === updatedNote.id
          ? {
              ...updatedNote,
              updatedAt: new Date().toISOString(),
            }
          : note
      )
    );

    setEditingNote(null);
  }

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      note.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="notes-page">
      <div className="notes-toolbar">
        <div>
          <h2>Your notes</h2>
          <p>Collect your thoughts. Keep your ideas alive.</p>
        </div>

        <span className="section-badge notes-badge">
          {notes.length} {notes.length === 1 ? "NOTE" : "NOTES"}
        </span>
      </div>

      <div className="notes-search">
        <span>⌕</span>

        <input
          type="search"
          placeholder="Search your notes..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search notes"
        />
      </div>

      <div className="notes-category-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "category-active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <NoteForm
        editingNote={editingNote}
        onAddNote={addNote}
        onUpdateNote={updateNote}
        onCancelEdit={() => setEditingNote(null)}
      />

      <div className="notes-results-heading">
        <h3>
          {search
            ? "Search results"
            : selectedCategory === "All"
              ? "All notes"
              : `${selectedCategory} notes`}
        </h3>

        <span>
          {filteredNotes.length}{" "}
          {filteredNotes.length === 1 ? "note" : "notes"}
        </span>
      </div>

      <NoteList
        notes={filteredNotes}
        onEdit={startEditing}
        onDelete={deleteNote}
      />
    </section>
  );
}

export default NotesApp;