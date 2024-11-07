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

    CSE_219 : [
      {
        title: "Pipelining",
        link: "https://docs.google.com/presentation/d/1s1mWasGL1ffYmR9PRDZ0Pymw0PyfSdfU/edit#slide=id.p1",
      },
      {
        title: "Memory Hierarchy",
        link: "https://docs.google.com/presentation/d/1h4BVELCCLT8H4INQ7nDjr3fpN_A2LJEt/edit#slide=id.p1",
      },
      {
        title: "Multiple ,Vector Processor & GPUs ",
        link: "https://docs.google.com/presentation/d/1s-_QyLwecSV8n4QJBxgk16zLG2ANJdY5/edit#slide=id.p1",
      },
      
    ],

    CP: [
      {
        title: "Resource for CP Algorithm ",
        link: "https://cp-algorithms.com/", 
      }
      
    ],

    ECO_205W : [
      {
        title: "Consumer Theory ",
        link: "https://drive.google.com/file/d/1-9mCLvl162fzZCbQFJzOZ6eF3cvU4qK2/view",
      },
      {
        title: "Competitive Supply ",
        link: "https://drive.google.com/file/d/1r716wVnPBxTE7qqYw7iih5VTstmudW8m/view",
      },
      {
        title: "Monopoly, Oligopoly, and Monopolistic Competition ",
        link: "https://drive.google.com/file/d/1DnZ4N8IqDl5y-ondt2Bn78FjjzqZceQL/view",
      },
      
    ],

    SWE_229: [
      {
        title: "Algorithm Note-(Hasing)",
        link: "https://drive.google.com/file/d/1lRtwUCGvrid_gLKh8gI4ekWWm0Ccnly3/view", 
      },
      
    ],

    SWE_227: [
      {
        title: "Regular Expression",
        link: "https://drive.google.com/file/d/1uFXeUn8jpxFXbAYIaQQX-R6AKuqWkl6S/view", 
      },
      
    ],
    CSE_313W: [
      {
        title: "Networking Note",
        link: "https://drive.google.com/file/d/1Fq8dnmc49ahAG5fF0qvixwls1gdcW_gT/view", 
      },
      {
        title: "Subnetting Note",
        link: "https://drive.google.com/file/d/1EUvXWgVyyefN6jh60FhPccqorEiRYu2B/view", 
      },
      {
        title: "VLAN Note",
        link: "https://drive.google.com/file/d/1wdfN7hcWDgykfu3Y9NQazyZoYmNRGtOg/view", 
      },
      
    ],

    SWE_321: [
      {
        title: "Refactoring Code Smell",
        link: "https://drive.google.com/file/d/1pE2blbXsgAnepNdorYEPdJxu-vzYWiTe/view", 
      },
      {
        title: "Archi Pattern",
        link: "https://drive.google.com/file/d/1e6rRWVJcQ2IQKKnu-iXw-6XgehFQddaR/view", 
      },     
      
    ],
    SWE_330: [
      {
        title: "Web Note",
        link: "https://drive.google.com/file/d/1rHBfiiDoMjwAQ3SGuqgFWxjwXrkrjFh3/view", 
      },
      
    ],

    SWE_323: [
      {
        title: "AI.pdf",
        link: "https://drive.google.com/file/d/10HLo7xyvJySApRJiCP9RqIT4GxHAqB1Y/view", 
      },
      {
        title: "Course Content",
        link: "https://drive.google.com/file/d/1LrKv1eZzw-IDWPDLhEJrO43B97wmcApn/view", 
      },
      
    ],
    Distributed_System: [
      {
        title: "Hadoop",
        link: "https://drive.google.com/file/d/17C3PkiBt2BvYwhcMAl4X_ysijD_UfzG4/view", 
      },
      {
        title: "Transaction",
        link: "https://drive.google.com/file/d/1QeTovEzes0CFnzEfEnV5XAeyvLuL6qfD/view", 
      },
      {
        title: "Distributed Shared Memory",
        link: "https://drive.google.com/file/d/1q1sHNAEJbR-8agxkDsZ6qLUVZOBUhhKQ/view", 
      },
      
    ],
    SWE_343: [
      {
        title: "Important Resource",
        link: "https://docs.google.com/document/d/1uVUlu0S1RmP28FcKHsvqRmuIMyBle5L9/edit#heading=h.gjdgxs", 
      },
      {
        title: "Matrix Derieative's Cheat Sheet",
        link: "https://drive.google.com/file/d/1rtprbJhKtNS8G2XD6diZ-NLN9WEiI89s/view", 
      },
      {
        title: "Matrix Calculus",
        link: "https://drive.google.com/file/d/1dlLLCQ-PSNa5hAyXm5eM27P0iRMdBYd8/view", 
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
