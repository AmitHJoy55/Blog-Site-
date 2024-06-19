import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MiniCard from '../src/components/miniComponents/MiniCard';
import { Context } from "../src/main";

const Subject = () => {
  const { mode } = useContext(Context);
  const navigate = useNavigate();
  const { semester, subject } = useParams();
  const resources = ["Books", "Notes"];

  const handleCardClick = (resource) => {
    navigate(`/resource/${semester}/${subject}/${resource.toLowerCase()}`);
  };


  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
    <div className="BookAndNote-container">
      <h1>
         {subject}
      </h1>
      <p>
        Details of {subject} course 
      </p>
      {/* Add more details based on the subject */}
      <div className="BookAndNote-container">
      <div className="BookAndNote-section">
          {resources.map((resource, index) => (
            <MiniCard key={index} subject={resource} onClick={() => handleCardClick(resource)} />
          ))}
        </div>
      </div>
    </div>
     </article>
  );
};

export default Subject;
