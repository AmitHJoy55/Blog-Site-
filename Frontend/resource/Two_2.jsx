import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function Two_2() {
  const subjects = ['SWE_229', 'SWE_235', 'SWE_237', 'SWE_233', 'SWE_231','SWE_227'];

  return (
   
    <div className="subject-container">
      <h1>2-2</h1>
      <div className="course-section">
        {subjects.map((subject, index) => (
          <MiniCard key={index} subject={subject} />
        ))}
      </div>
    </div>
   
  );
}

export default Two_2;
