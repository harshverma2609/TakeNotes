
import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

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

  return (
    <div>
      <div className="allNotesBar">
        <button id="AllButton" type="button" onClick={() => setFilter("All")}>All</button>
        <button id="HomeButton" type="button" onClick={() => setFilter("Home")}>Home</button>
        <button id="WorkButton" type="button" onClick={() => setFilter("Work")}>Work</button>
        <button id="PersonalButton" type="button" onClick={() => setFilter("Personal")}>Personal</button>
        <div id="space"></div>
        <button id="AddButton" type="button" onClick={() => setShowCreateArea(true)}>Add Note</button>
      </div>

      <div className="notesCounter">
        You have completed {completedCount}/{notes.length} notes
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

// import React, { useState, useEffect } from "react";
// import Note from "./Note";
// import CreateArea from "./CreateArea";

// function NotesBar() {
//   const [notes, setNotes] = useState([]);
//   const [showCreateArea, setShowCreateArea] = useState(false);
//   const [filter, setFilter] = useState("All");
//   const [completedCount, setCompletedCount] = useState(0);

//   useEffect(() => {
//     const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     setNotes(savedNotes);
//     setCompletedCount(savedNotes.filter(note => note.completed).length);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }, [notes]);

//   function addNote(newNote) {
//     setNotes(prevNotes => {
//       return [...prevNotes, { ...newNote, completed: false }];
//     });
//     setShowCreateArea(false);
//   }

//   function deleteNote(id) {
//     setNotes(prevNotes => {
//       const newNotes = prevNotes.filter((noteItem, index) => {
//         return index !== id;
//       });
//       setCompletedCount(newNotes.filter(note => note.completed).length);
//       return newNotes;
//     });
//   }

//   function toggleComplete(id) {
//     setNotes(prevNotes => {
//       const updatedNotes = prevNotes.map((note, index) => {
//         if (index === id) {
//           return { ...note, completed: !note.completed };
//         }
//         return note;
//       });
//       setCompletedCount(updatedNotes.filter(note => note.completed).length);
//       return updatedNotes;
//     });
//   }

//   function closeModal() {
//     setShowCreateArea(false);
//   }

//   const filteredNotes = filter === "All" ? notes : notes.filter(note => note.category === filter);

//   return (
//     <div>
//       <div className="allNotesBar">
//         <button id="AllButton" type="button" onClick={() => setFilter("All")}>All</button>
//         <button id="HomeButton" type="button" onClick={() => setFilter("Home")}>Home</button>
//         <button id="WorkButton" type="button" onClick={() => setFilter("Work")}>Work</button>
//         <button id="PersonalButton" type="button" onClick={() => setFilter("Personal")}>Personal</button>
//         <div id="space"></div>
//         <button id="AddButton" type="button" onClick={() => setShowCreateArea(true)}>Add Note</button>
//       </div>

//       <div className="notesCounter">
//         You have completed {completedCount}/{notes.length} notes
//       </div>

//       {showCreateArea && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <CreateArea onAdd={addNote} />
//           </div>
//         </div>
//       )}

//       <div className="notesContainer">
//         {filteredNotes.map((noteItem, index) => {
//           return (
//             <Note
//               key={index}
//               id={index}
//               title={noteItem.title}
//               content={noteItem.content}
//               category={noteItem.category}
//               completed={noteItem.completed}
//               onDelete={deleteNote}
//               onToggleComplete={toggleComplete}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default NotesBar;
