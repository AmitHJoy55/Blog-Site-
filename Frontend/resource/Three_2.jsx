import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function Three_2() {
  const subjects = ['BUS_301W', 'Distributed_System', 'SWE_333', 'SWE_343'];

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
