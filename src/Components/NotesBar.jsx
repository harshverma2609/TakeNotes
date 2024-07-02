import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ProgressBar from "./ProgressBar";

function NotesBar() {
  const [notes, setNotes] = useState([]);
  const [showCreateArea, setShowCreateArea] = useState(false);
  const [filter, setFilter] = useState("All");
  const [completedCount, setCompletedCount] = useState(0);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, { ...newNote, completed: false }];
    });
    setShowCreateArea(false);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      const newNotes = prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
      setCompletedCount(newNotes.filter(note => note.completed).length);
      return newNotes;
    });
  }

  function toggleComplete(id) {
    setNotes(prevNotes => {
      const updatedNotes = prevNotes.map((note, index) => {
        if (index === id) {
          return { ...note, completed: !note.completed };
        }
        return note;
      });
      setCompletedCount(updatedNotes.filter(note => note.completed).length);
      return updatedNotes;
    });
  }

  function closeModal() {
    setShowCreateArea(false);
  }

  const filteredNotes = filter === "All" ? notes : notes.filter(note => note.category === filter);

  const progress = notes.length > 0 ? (completedCount / notes.length) * 100 : 0;

  return (
    <div className="notesBar">
      <div className="notesBarButton">
        <button id="AllButton" acto type="button" onClick={() => setFilter("All")}>All</button>
        <button id="HomeButton" type="button" onClick={() => setFilter("Home")}>Home</button>
        <button id="WorkButton" type="button" onClick={() => setFilter("Work")}>Work</button>
        <button id="PersonalButton" type="button" onClick={() => setFilter("Personal")}>Personal</button>
        <div id="space"></div>
        <button id="AddButton" type="button" onClick={() => setShowCreateArea(true)}>Add Note</button>
      </div>

      <div className="notesCounter">
        <p>You have completed {completedCount}/{notes.length} notes</p>
        <ProgressBar value={progress} />
      </div>

      {showCreateArea && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <CreateArea onAdd={addNote} />
          </div>
        </div>
      )}

      <div className="notesPreview">
        {filteredNotes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              category={noteItem.category}
              completed={noteItem.completed}
              onDelete={deleteNote}
              onToggleComplete={toggleComplete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NotesBar;
