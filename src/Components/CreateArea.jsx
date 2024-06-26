
import React, { useState } from "react";
import addNoteIcon from "./images/addNote.png";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    category: "Home"
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
      content: "",
      category: "Home"
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
          placeholder="Write a note..."
          rows="3"
        />
        <select name="category" onChange={handleChange} value={note.category}>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <button onClick={submitNote}>
          <img id="addNoteIcon" src={addNoteIcon} alt="add Note Icon" />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;


// import React, { useState } from "react";
// import addNoteIcon from "./images/addNote.png";

// function CreateArea(props) {
//   const [note, setNote] = useState({
//     title: "",
//     content: "",
//     category: "Home" // Default category
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNote(prevNote => {
//       return {
//         ...prevNote,
//         [name]: value
//       };
//     });
//   }

//   function submitNote(event) {
//     props.onAdd(note);
//     setNote({
//       title: "",
//       content: "",
//       category: "Home" // Reset to default category
//     });
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <form>
//         <input
//           name="title"
//           onChange={handleChange}
//           value={note.title}
//           placeholder="Note Title"
//         />
//         <textarea
//           name="content"
//           onChange={handleChange}
//           value={note.content}
//           placeholder="write a note..."
//           rows="3"
//         />
//         <select
//           name="category"
//           onChange={handleChange}
//           value={note.category}
//           style={{ float: 'right', margin: '10px 0' }}
//         >
//           <option value="Home">Home</option>
//           <option value="Work">Work</option>
//           <option value="Personal">Personal</option>
//         </select>
//         <button onClick={submitNote}><img id="addNoteIcon" src={addNoteIcon} alt="add Note Icon" /></button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;
