import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MiniCard from "../src/components/miniComponents/MiniCard";
import { Context } from "../src/main";

const Notes = () => {
  const { mode } = useContext(Context);
  const notes = ["Note"];

  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="notes-container">
        <h1>Notes</h1>
        <div className="notes-section">
          {notes.map((note, index) => (
            <MiniCard key={index} subject={note} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Notes;
