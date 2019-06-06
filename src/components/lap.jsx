import React from 'react';

export const Lap = (props) => {
  const { lap, lapNum, lapIdx } = props;
  
  return (
      <li className="lap-item">
        <span>{`Lap ${lapNum}`} </span>
        <span>{ lap }</span>
      </li>
  );
}