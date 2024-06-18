import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MiniCard = ({ subject }) => {
  const navigate = useNavigate();
  const { semester, subject: mainSubject } = useParams(); // Get the semester and main subject from the URL

  const handleClick = () => {
    if (subject === 'Books' || subject === 'Notes') {
      navigate(`/resource/${semester}/${mainSubject}/${subject.toLowerCase()}`);
    } else {
      navigate(`/resource/${semester}/${subject}`);
    }
  };

  return (
    <div className="mini-card" onClick={handleClick}>
      <p>{subject}</p>
    </div>
  );
};

export default MiniCard;
