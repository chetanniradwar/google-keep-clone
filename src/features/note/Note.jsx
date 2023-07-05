import React from "react";

const Note = (props) => {
  const deleteNote = (e) => {
    e.preventDefault();
    const ans = window.confirm("Do you really want to delete the note?");
    if(ans)
      props.deleteNote(props.id);
      return
    
  };

  const pinNote = (e) => {
    e.preventDefault();
    props.pinNote(props.id);
  };

  return (
    <>
      <div className="note">
        <h1> {props.title} </h1>
        <br />
        <p>{props.content} </p>
        <button onClick={deleteNote} className="btn">
          DEL
        </button>
        <button onClick={pinNote} className="btn">
          PIN
        </button>
      </div>
    </>
  );
};

export default Note;

