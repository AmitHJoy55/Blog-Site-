import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function Four_2() {
  const subjects = ['Internship'];

  return (
   
    <div className="subject-container">
      <h1>4-2</h1>
      <div className="course-section">
        {subjects.map((subject, index) => (
          <MiniCard key={index} subject={subject} />
        ))}
      </div>
    </div>
   
  );
}

export default Four_2;
