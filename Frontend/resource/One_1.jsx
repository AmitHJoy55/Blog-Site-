import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function One_1() {
  const subjects = ['EEE_101W', 'MAT_105W', 'SWE_123', 'PHY_103W', 'SWE_121', 'ENG_101W'];

  return (
   
    <div className="subject-container">
      <h1>1-1</h1>
      <div className="course-section">
        {subjects.map((subject, index) => (
          <MiniCard key={index} subject={subject} />
        ))}
      </div>
    </div>
   
  );
}

export default One_1;
