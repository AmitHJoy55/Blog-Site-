import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function Three_2() {
  const subjects = ['BUS 301W', 'Distributed System', 'SWE 333', 'ML'];

  return (
   
    <div className="subject-container">
      <h1>3-2</h1>
      <div className="course-section">
        {subjects.map((subject, index) => (
          <MiniCard key={index} subject={subject} />
        ))}
      </div>
    </div>
   
  );
}

export default Three_2;
