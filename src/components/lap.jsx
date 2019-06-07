import React from 'react';

export const Lap = ({ lap, lapNum, cssClassName }) => {
  return (
    <li className={`lap-item ${cssClassName}`}>
        <span>{`Lap ${lapNum}`} </span>
        <span>{ lap }</span>
      </li>
  );
}