import React from "react";
import Header from "./features/header/Header";
import CreateNote from "./features/createnote/CreateNotes";
import Note from "./features/note/Note";
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, pinNote } from './features/note/notesSlice'


const App = () => {

  const notes = useSelector((state) => state.Notes.all_notes)
  console.log(notes)
  const dispatch = useDispatch()
  const onDelete = (id) => {
    dispatch(deleteNote(id))
  };

  const onPin = (id) => {
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
      <CreateNote />
      {pinnedNotes.length > 0 ? <div className="pinned--tag">PINNED</div> : null}
      {pinnedNotes.length > 0 ? <div className="pinned--notes">{pinnedNotes}</div> : null}
      {unpinnedNotes.length > 0 ? <div className="unpinned--tag">UNPINNED</div> : null}
      {unpinnedNotes.length > 0 ? <div className="unpinned--notes">{unpinnedNotes}</div> : null}
    </>
  );
};

export default App;