import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function One_2() {
  const subjects = ['SOC_203W', 'MAT_107W', 'SWE_125', 'SWE_127', 'STA_101W'];

  return (
   
    <div className="subject-container">
      <h1>1-2</h1>
      <div className="course-section">
        {subjects.map((subject, index) => (
          <MiniCard key={index} subject={subject} />
        ))}
      </div>
    </div>
   
  );
}

export default One_2;
