
import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function NotesBar() {
  const [notes, setNotes] = useState([]);
  const [showCreateArea, setShowCreateArea] = useState(false);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    setShowCreateArea(false);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function closeModal() {
    setShowCreateArea(false);
  }

  return (
    <div>
      <div className="allNotesBar">
        <button id="AllButton" type="button">All</button>
        <button id="HomeButton" type="button">Home</button>
        <button id="WorkButton" type="button">Work</button>
        <button id="PersonalButton" type="button">Personal</button>
        <div id="space"></div>
        <button id="AddButton" type="button" onClick={() => setShowCreateArea(true)}>Add Note</button>
      </div>

      {showCreateArea && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <CreateArea onAdd={addNote} />
          </div>
        </div>
      )}

      <div>
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NotesBar;
