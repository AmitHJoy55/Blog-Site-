import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function Four_1() {
  const subjects = ['SWE_423', 'SWE_431', 'SWE_429', 'SWE_425'];

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
