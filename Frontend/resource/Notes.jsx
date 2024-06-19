import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MiniCard from "../src/components/miniComponents/MiniCard";
import { Context } from "../src/main";

const Notes = () => {
  const { mode } = useContext(Context);
  const { subject } = useParams();

  const subjectNotes = {
    EEE_101W: [
      {
        title: "EEE Note 1",
        link: "https://drive.google.com/file/d/1Aw0kY_E7MMCgxXUXoKVGsPuJ_2qumdIb/view", // Example link
      },
      {
        title: "EEE Note 2",
        link: "https://drive.google.com/file/d/1HAHGMIUVzg-ognwhfT0Q7E4gATIJmzlY/view", // Example link
      },
    ],

    SWE_123: [
      {
        title: "D.M Note 1",
        link: "https://drive.google.com/file/d/11akbEAL7YFQBYRlJfWKrcE3upRSvwFHf/view",
      },
      {
        title: "D.M Note 2",
        link: "https://drive.google.com/file/d/1BxtA55tkGheLHnCitU_KJDX5Sn3QNx0P/view",
      },
      {
        title: "D.M Note 3",
        link: "https://drive.google.com/file/d/1K60q9My_oT7FPHcxVhvM-WHnMApSaGZN/view",
      },
    ],

    MAT_105W: [
      {
        title: "Math Note 1",
        link: "https://drive.google.com/file/d/1IUbUav_Ke2lwDXgIWHSxmnzAW5LNIseh/view",
      },
      {
        title: "Math Note 2",
        link: "https://drive.google.com/file/d/1Nb4CiykYpxJMWUbWp5Bx0LxSAzeWawOK/view",
      },
      {
        title: "Math Note 3",
        link: "https://drive.google.com/file/d/1DBoMYMtKhFV48pDE9vCyomgDACTIS_Ju/view",
      },
    ],

    PHY_103W: [
      {
        title: "Physics Note 1",
        link: "https://drive.google.com/file/d/1pvMIPSa3xR-J2U8tUfjb1PHUxQn3MEnv/view",
      },
      {
        title: "Physics Note 2",
        link: "https://drive.google.com/file/d/1Ve5nn59lqm-MqvMyzR9wzTBB_AzO5sfm/view",
      },
      {
        title: "Physics Note 3",
        link: "https://drive.google.com/file/d/1qPskMb8NhH2I5pbLVY7L8RQBcnHedlkc/view",
      },
    ],
  };

  const notes = subjectNotes[subject] || [];

  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="notes-container">
        <h1>Notes</h1>
        <div className="notes-section">
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <MiniCard key={index} subject={note.title} link={note.link} />
            ))
          ) : (
            <div className="no-notes-available">
              <img src="http://localhost:5173/S.png" alt="No notes available" />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Notes;
