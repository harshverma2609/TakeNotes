
import React, { useState } from "react";
import addNoteIcon from "./images/addNote.png";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Note Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="write a note..."
          rows="3"
        />
        <button onClick={submitNote}><img id="addNoteIcon" src={addNoteIcon} alt="add Note Icon" /></button>
      </form>
    </div>
  );
}

export default CreateArea;
