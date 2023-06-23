import React, { useEffect, useState } from "react";
import "./Main.css";

import uuid from "react-uuid";
import Note from "../Notes/Note";
import Notes from '../Notes/Notes'


const Main = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = useState(false);




  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])
  const createNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      lastModified: Date.now(),
      content: "",
    };
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }
      return note;
    })

    setNotes(updatedNotesArray)
  }


    return (
      <main>
        <nav>
          <div className="nav-left">
          <h1>Notes</h1>
          <button onClick={createNote}> + </button>
          </div>
          <div className="nav-right">
            <p>-Aashrya</p>
          </div>
        </nav>
        <div className="home-section">
          <Notes
            notesDta={notes}
            deleteNote={handleDeleteNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
          <Note activeNote={getActiveNote()} notes={notes} onUpdateNote={onUpdateNote}/>
        </div>
      </main>
    );
  }


export default Main;
