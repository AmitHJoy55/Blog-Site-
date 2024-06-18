import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function Four_1() {
  const subjects = ['Computer Graphics', 'Human Computer Interaction', 'INS', 'Software Project management'];

  return (
   
    <div className="subject-container">
      <h1>4-1</h1>
      <div className="course-section">
        {subjects.map((subject, index) => (
          <MiniCard key={index} subject={subject} />
        ))}
      </div>
    </div>
   
  );
}

export default Four_1;
