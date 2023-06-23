import React from "react";
import "./Notes.css";
import { AiTwotoneDelete } from "react-icons/ai";
const Notes = ({ notesDta, deleteNote, activeNote, setActiveNote }) => {
  const sortedNotes = notesDta.sort((a, b) => b.lastModified-a.lastModified)
  return (
    <div className="left">
      
      {sortedNotes.map((note) => (
        <div
          className={`note-main ${note.id === activeNote && 'active'}`}
          key={note.id}
          onClick={() => setActiveNote(note.id)}
        >
          <div className="title">
            {note.title}
            <p>{note.content && note.content.substr(0, 100) + "..."}</p>
            <small>
              Last modified: {new Date(note.lastModified).toLocaleTimeString()}
            </small>
          </div>
          <div className="delete-btn " onClick={() => deleteNote(note.id)}>
            <AiTwotoneDelete />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notes;
