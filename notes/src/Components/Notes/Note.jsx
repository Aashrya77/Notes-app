import React from "react";

import ReactMarkdown from "react-markdown";

const Note = ({ activeNote, onUpdateNote, notes }) => {
  const onEdit = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="not-selected">{`${notes.length === 0 ? 'You have no notes' : 'No note selected'}`}</div>;
  }

  return (
    <div className="right">
      <div className="bottom">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEdit("title", e.target.value)}
          
        />
        <textarea
          cols="30"
          rows="10"
          value={activeNote.body}
          onChange={(e) => onEdit("content", e.target.value)}
          placeholder="Your notes here.."
        ></textarea>
      </div>
      <div className="preview">
        <strong>Preview:</strong>
        <ReactMarkdown>{activeNote.content}</ReactMarkdown>
      </div>
    </div>
  );
};
export default Note;
