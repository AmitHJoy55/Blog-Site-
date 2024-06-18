import React from 'react';
import MiniCard from '../src/components/miniComponents/MiniCard';

function Two_2() {
  const subjects = ['Algorithm Design & Analysis', 'Ethics & Cyber Law', 'MIS', 'OS', 'Numerical Analysis','TOC'];

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
