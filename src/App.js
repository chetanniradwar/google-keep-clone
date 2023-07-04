import React, { useState } from "react";
import Header from "./features/header/Header";
import CreateNote from "./features/createnote/CreateNotes";
import Note from "./features/note/Note";
import Footer from "./features/footer/Footer";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });

    // console.log(addItem);
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default App;