import React from 'react';

const Card = ({ title, description, link }) => {
  return (
    
    <div className="cardresouces">
      <figure>
        <img 
          src="./bookpic.jpg" 
          alt="Movie"
          className="card-img-resouces"
        />
      </figure>
      <div className="card-body-resouces">
        <h2 className="card-title-resouces">{title}</h2>
        <p>{description}</p>
        <div className="card-actions-resouces">
          <button className="btn-resource" > <a href={link} className='linktocourse'>Read more</a> </button>
        </div>
      </div>
    </div>
  );
};

export default Card;