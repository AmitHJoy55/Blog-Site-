import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function Three_1() {
  const subjects = ['CN', 'Design Pattern', 'DB', 'Web', 'AI'];

  return (
   
    <div className="subject-container">
      <h1>3-1</h1>
      <div className="course-section">
        {subjects.map((subject, index) => (
          <MiniCard key={index} subject={subject} />
        ))}
      </div>
    </div>
   
  );
}

export default Three_1;
