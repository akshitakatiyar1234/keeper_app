import React, { useState } from "react";
import Card from "./note";
import Heading from "./heading";
import Footer from "./footer";
import CreateArea from "./createarea";

function App() {
  const [notes, setNotes] = useState([]);
  function addItem(newNote) {
    setNotes((prevnotes) => {
      return [...prevnotes, newNote];
    });
  }
  function deleteItem(id) {
    setNotes((prevnotes) => {
      return prevnotes.filter((newItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Heading />
      <CreateArea addNote={addItem} />
      {notes.map((newItem, index) => (
        <Card
          id={index}
          key={index}
          title={newItem.title}
          content={newItem.content}
          onDelete={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}
export default App;
