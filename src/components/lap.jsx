import React from 'react';

// (Christi): adding css before className is a bit redundant
export const Lap = ({ lap, lapNum, cssClassName }) => {
  return (
    <li className={`lap-item ${cssClassName}`}>
      {/* (Christi): if you find yourself intropolating strings
          a lot in the render function create variables for them.
          Here it is fine. Rule of thumb is to not inline things 
          if it helps make something more readable extract it 
          out to a variable.
      */}
      <span>{`Lap ${lapNum}`} </span>
      <span>{lap}</span>
    </li>
  );
};
