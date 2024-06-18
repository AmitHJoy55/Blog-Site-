import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function One_2() {
  const subjects = ['Sociology', 'Linear Math', 'ISE', 'Data Structure', 'Statistics'];

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
