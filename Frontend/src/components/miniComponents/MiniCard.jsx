import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MiniCard = ({ subject, link }) => {
  const navigate = useNavigate();
  const { semester, subject: mainSubject } = useParams(); // Get the semester and main subject from the URL

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank'); // Open the link in a new tab
    } else if (subject === 'Books' || subject === 'Notes') {
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
