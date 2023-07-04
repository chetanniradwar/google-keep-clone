import React from "react";

const Note = (props) => {
  const deleteNote = (e) => {
    e.preventDefault();
    alert("delete it now");
    props.deleteItem(props.id);
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
      </div>
    </>
  );
};

export default Note;

