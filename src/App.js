import React, { useState } from "react";
import Header from "./features/header/Header";
import CreateNote from "./features/createnote/CreateNotes";
import Note from "./features/note/Note";
import Footer from "./features/footer/Footer";
import { pureFinalPropsSelectorFactory } from "react-redux/es/connect/selectorFactory";

import { useSelector, useDispatch } from 'react-redux';
import {deleteNote, pinNote} from'./features/note/notesSlice'


const App = () => {
  // const [notes, setNotes] = useState([]);

  const notes = useSelector((state) => state.Notes.all_notes)
  console.log(notes)
  const dispatch = useDispatch()
  // const add_note = (note) => {
  //   console.log("herer",note)
  //   if (note.content.length == 0 && note.title.length ==0 ){
  //     alert("Please add title or content")
  //     return
  //   }

  //   // setNotes((prevData) => {
  //   //   return [...prevData, note];
  //   // });
  //   dispatch(addNote(note))
  // };

  const onDelete = (id) => {
    dispatch(deleteNote(id))

    // setNotes((olddata) =>
    //   olddata.filter((currdata, indx) => {
    //     return indx !== id;
    //   })
    // );

  };

  const onPin = (id) => {
    // setNotes((currentNotes) => {
    //   return (
    //     currentNotes.map((note, index) => {
    //       console.log(note.isPinned)
    //       return (index === id) ? { ...note, isPinned: !note.isPinned } : note
    //     })

    //   )
    // }
    // );
    dispatch(pinNote(id))

  };

  let pinnedNotes = notes.map((val, index) => {
    return (
      
      val.isPinned ? <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteNote={onDelete}
        pinNote={onPin}
      />
        : null
    );
  })

  pinnedNotes = pinnedNotes.filter((val, index) => val != null)
  

  let unpinnedNotes = notes.map((val, index) => {
    return (
      val.isPinned ? null :
        (<Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          isPinned={val.isPinned}
          deleteNote={onDelete}
          pinNote={onPin}
        />)
    );
  })
  unpinnedNotes = unpinnedNotes.filter((val, index) => val != null)

  return (
    <>
      <Header />
      <CreateNote/>

      {pinnedNotes.length > 0 ? <div className="pinned--tag">PINNED</div> : null}
      {pinnedNotes.length > 0 ?<div className="pinned--notes">{pinnedNotes}</div> : null}
      {unpinnedNotes.length > 0 ? <div className="unpinned--tag">UNPINNED</div>: null}
      {unpinnedNotes.length > 0 ?  <div className="unpinned--notes">{unpinnedNotes}</div>: null}
    </>
  );
};

export default App;