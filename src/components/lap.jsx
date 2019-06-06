import React from 'react';

export const Lap = (props) => {
  const { lap, lapNum, cssClassName } = props;
  
  return (
    <li className={`lap-item ${cssClassName}`}>
        <span>{`Lap ${lapNum}`} </span>
        <span>{ lap }</span>
      </li>
  );
}