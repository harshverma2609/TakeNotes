
import React from "react";

function Note(props) {
  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  function handleCheckboxChange() {
    props.onToggleComplete(props.id);
  }

  return (
    <div className={`note ${props.completed ? "completed" : ""}`}>
      <div className="box">
        <input
          type="checkbox"
          checked={props.completed}
          onChange={handleCheckboxChange}
        />
        <button onClick={handleDeleteClick}>DELETE</button>
      </div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p><strong>Category:</strong> {props.category}</p>
    </div>
  );
}

export default Note;

// import React from "react";

// function Note(props) {
//   function handleDeleteClick() {
//     props.onDelete(props.id);
//   }

//   function handleCheckboxChange() {
//     props.onToggleComplete(props.id);
//   }

//   return (
//     <div className={`note ${props.completed ? "completed" : ""}`}>
//       <div className="box">
//         <input
//           type="checkbox"
//           checked={props.completed}
//           onChange={handleCheckboxChange}
//         />
//         <button onClick={handleDeleteClick}>DELETE</button>
//       </div>
//       <h1>{props.title}</h1>
//       <div className="content">
//         <p>{props.content}</p>
//       </div>
//       <p><strong>Category:</strong> {props.category}</p>
//     </div>
//   );
// }

// export default Note;
