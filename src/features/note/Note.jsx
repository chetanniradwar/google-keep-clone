import React from "react";
import { useDispatch } from 'react-redux';
import { pinNote, deleteNote } from '../note/notesSlice'

const Note = (props) => {
  const dispatch = useDispatch()

  const delete_note = (e) => {
    e.preventDefault();
    const ans = window.confirm("Do you really want to delete the note?");
    if (ans)
      dispatch(deleteNote(props.id))
    return

  };

  const pin_note = (e) => {
    e.preventDefault();
    dispatch(pinNote(props.id));
  };

  return (
    <>
      <div className="note">
        <h1> {props.title} </h1>
        <br />
        <p>{props.content} </p>
        <button onClick={delete_note} className="btn">
          DEL
        </button>
        <button onClick={pin_note} className="btn">
          PIN
        </button>
      </div>
    </>
  );
};

export default Note;

