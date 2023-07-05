import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { updateNote, initializeNote } from '../createnote/createNotesSlice'

import { addNote, } from '../note/notesSlice'


const Note = () => {

  const note = useSelector((state) => state.createNote)
  const dispatch = useDispatch()

  const [isExpand, setIsExpand] = useState(false);


  const update_note = (event) => {
    dispatch(updateNote(event.target))
  };


  const add_note = (e) => {
    e.preventDefault();
    if (!note.content && !note.title) {
      alert("Please add title or content")
      return
    }

    dispatch(addNote(note))
    dispatch(initializeNote())
  };

  const expandIt = () => {
    setIsExpand(true);
  };

  const backToOriginal = () => {
    setIsExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={backToOriginal}>
        <form>
          {isExpand ? (
            <input
              type="text"
              placeholder="Title"
              name="title"
              autoComplete="off"
              value={note.title}
              onChange={update_note}
            />
          ) : null}

          <br />
          <textarea
            placeholder="Write a note...."
            rows=""
            coloum="1"
            name="content"
            value={note.content}
            onChange={update_note}
            onClick={expandIt}
          ></textarea>

          {isExpand ? (

            <button className="plus-btn" onClick={add_note}>
              ADD
            </button>

          ) : null}
        </form>
      </div>
    </>
  );
};

export default Note;
