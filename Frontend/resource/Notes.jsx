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
        link: "https://drive.google.com/file/d/1Aw0kY_E7MMCgxXUXoKVGsPuJ_2qumdIb/view", 
      },
      {
        title: "EEE Note 2",
        link: "https://drive.google.com/file/d/1HAHGMIUVzg-ognwhfT0Q7E4gATIJmzlY/view", 
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

    MAT_107W: [
      {
        title: "Linear Math Note 1",
        link: "https://drive.google.com/file/d/1ksAQIseNvErqWY-XJ5D5c_fOVQb9RRiR/view", 
      },
      {
        title: "Linear Math Note 2",
        link: "https://drive.google.com/file/d/141necxYI3dVU4C3xALeyPQZ6HgM-al7N/view", 
      },
      {
        title: "Linear Math Note 3",
        link: "https://drive.google.com/file/d/1cM_QewGqQFG-9yIVE0kzDMx9ev30pvy0/view", 
      },
    ],

    STA_101W: [
      {
        title: "Statistics Note 1",
        link: "https://drive.google.com/file/d/1d_37-Bj9tcNnNl1XDDn-9ttmhaqms62C/view?usp=sharing", 
      },
      {
        title: "Statistics Note 2",
        link: "https://drive.google.com/file/d/1JK0Ud455g8bZYDlDsCSoJjX0r5mdrzkq/view", 
      },
      {
        title: "Statistics Note 3",
        link: "https://drive.google.com/file/d/1uvpu8Rs1glKLwDkLL0gkjkXJzNXR83pk/view", 
      },
      {
        title: "Statistics Note 4",
        link: "https://drive.google.com/file/d/1rO4zbUIGzZ98HInhy_cXmefzha8QMAAh/view", 
      },
    ],

    SWE_125: [
      {
        title: "Introduction to Software Engineering Note 1",
        link: "https://drive.google.com/file/d/1faAu3ZUHD2rMGfw5oki-7XYkrDfLE9Kp/view", 
      },
      {
        title: "Introduction to Software Engineering Note 2",
        link: "https://drive.google.com/file/d/1Zge1HYCnF9jiUve0-VokFeUYVNEg_dZa/view", 
      },
      {
        title: "Introduction to Software Engineering Note 3",
        link: "https://drive.google.com/file/d/1iCG3bE0J8zgkDzDFLyIeLFm-t-zMY0qH/view", 
      },
    ],

    SWE_127: [
      {
        title: "Data Structure Note 1",
        link: "https://drive.google.com/file/d/1v1u44LV3wN9RSQJyvPewfD_bjggqdmhR/view", 
      },
      {
        title: "Data Structure Note 2",
        link: "https://drive.google.com/file/d/1zsFz1Cdq_irqYN4bqDiZSBkgYj28OkVK/view", 
      },
      {
        title: "Data Structure Note 3",
        link: "https://drive.google.com/file/d/1iCG3bE0J8zgkDzDFLyIeLFm-t-zMY0qH/view", 
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
