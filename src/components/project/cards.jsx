import React from 'react';
import card from "../../assets/card.jpg"


const Cards = ({project}) => {
  const {name, summary, tools,link,icon } = project;
    return (
      <><a href={link} target="_blank" rel="noopener noreferrer">
      <div className='container mx-auto px-4 py-10 lg:px-24 flex flex-col items-center gap-6 justify-center'
      style={{ 
        backgroundImage: `url(${card})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.5)', 
        border: '2px solid white', 
        borderRadius: '10px',
        position:'relative'
      }}>
        <img src={icon} alt="Logo" style={{filter:'brightness(0) invert(1)'}}/>
        <h1 className='font-bold text-4xl mt-1 gradient-text pb-2 px-4 lg:px-8 xl:px-12'>{name}</h1>
        <p className='mt-2 text-gray-400'>{summary}</p>
        <p className='mt-2 text-gray-400'>Tools : {tools.join(', ')}</p>
      </div>
      </a>
      </>
  );
};

export default Cards;
