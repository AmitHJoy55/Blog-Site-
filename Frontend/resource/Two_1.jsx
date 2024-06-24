import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function Two_1() {
  const subjects = ['OOP', 'Competetive Programming', 'Economics', 'Business', 'SRE','Computer Architecture'];

  return (
   
    <div className="subject-container">
      <h1>2-1</h1>
      <div className="course-section">
        {subjects.map((subject, index) => (
          <MiniCard key={index} subject={subject} />
        ))}
      </div>
    </div>
   
  );
}

export default Two_1;
