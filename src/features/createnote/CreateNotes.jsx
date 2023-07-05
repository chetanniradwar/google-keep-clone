import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import {updateNote,initializeNote} from '../createnote/createNotesSlice'

import {addNote, } from '../note/notesSlice'


const Note = (props) => {

  const dispatch = useDispatch()

  const [isExpand, setIsExpand] = useState(false);
  const note = useSelector((state) => state.createNote.note)
  console.log("here", note)
  // const [note, setNote] = useState({
  //   title: "",
  //   content: "",
  //   isPinned: false,
  // });


  const update_note = (event) => {
    const { name, value } = event.target;
    // console.log("fsf", name, value)
    // console.log(event.target)
    dispatch(updateNote(event.target))
    // const { name, value } = event.target;

  //   setNote((prevData) => {
  //     return {
  //       ...prevData,
  //       [name]: value,
  //     };
  //   });
  };
  

  const add_note = (e) => {
    e.preventDefault();
    // props.passNote(note);
    console.log("fewf", note)
    if (note.content.length == 0 && note.title.length == 0 ){
          alert("Please add title or content")
          return
        }
        
    dispatch(addNote(note))
    dispatch(initializeNote())
    // setNote({
    //   title: "",
    //   content: "",
    //   isPinned: false,
    // });
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
