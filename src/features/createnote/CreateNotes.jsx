import React, { useState } from "react";

const Note = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    isPinned: false,
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addNote = (e) => {
    e.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      content: "",
      isPinned: false,
    });
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
              onChange={inputEvent}
            />
          ) : null}

          <br />
          <textarea
            placeholder="Write a note...."
            rows=""
            coloum="1"
            name="content"
            value={note.content}
            onChange={inputEvent}
            onClick={expandIt}
          ></textarea>

          {isExpand ? (
            
            <button className="plus-btn" onClick={addNote}>
             ADD
            </button>

          ) : null}
        </form>
      </div>
    </>
  );
};

export default Note;
