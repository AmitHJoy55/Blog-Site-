import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function One_1() {
  const subjects = ['EEE', 'Math', 'D.M', 'Physics', 'SPL', 'SSS'];

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
