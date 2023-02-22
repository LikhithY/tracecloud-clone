import React, { Fragment, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Release.css";
import SavedReleases from "./SavedReleases";

const Release = () => {
  const [note, setNote] = useState({
    name: "",
    description: "",
    owner: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const resetForm = () => {
    setNote({
      name: "",
      description: "",
      owner: ""
    })
  }

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const submitNote = (event) => {
    event.preventDefault();
    addNote(note);
    resetForm();
  };

  return (
    <Fragment>
      <Sidebar />
      <div className="release">
        <h2>Create a Release</h2>

        <form className="release-form">
          <label htmlFor="">Name</label>
          <textarea
            name="name"
            value={note.name}
            onChange={handleChange}
            required
            rows="5"
            cols="100"
          />

          <label>Description</label>
          <textarea
            name="description"
            value={note.description}
            onChange={handleChange}
            required
            rows="5"
            cols="100"
          />

          <label>Owner</label>
          <input
            name="owner"
            value={note.owner}
            onChange={handleChange}
            required
            type="text"
          />
        </form>
        <button onClick={submitNote}>Create a Release</button>
      </div>

     <SavedReleases notes={notes} />

    </Fragment>
  );
};

export default Release;
