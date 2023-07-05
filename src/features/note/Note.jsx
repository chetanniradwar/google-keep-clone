import React from "react";

const Note = (props) => {
  const deleteNote = (e) => {
    e.preventDefault();
    alert("delete it now");
    props.deleteNote(props.id);
  };

  const pinNote = (e) => {
    e.preventDefault();
    alert("pin note");
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

