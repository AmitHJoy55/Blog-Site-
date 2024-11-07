import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function Three_1() {
  const subjects = ['CSE_313W', 'SWE_321', 'SWE_327', 'SWE_330', 'SWE_323'];

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
