import React from 'react';

// lap component
import { Lap } from './lap';

// util
import { displayTimeFormat } from '../util/format';


export const LapList = (props) => {
  const {
    laps,
    firstLapTimeElapsed,
    maxLapIndex,
    minLapIndex
  } = props;

  let firstLap;
  if (parseInt(firstLapTimeElapsed) === 0) {
    firstLap = null;
  } else {
    firstLap = <li className="lap-item">
      <span>{`Lap ${laps.length + 1}`} </span>
      <span>{displayTimeFormat(firstLapTimeElapsed)}</span>
    </li>;
  }
  
  return (
    <div style={{ height: '25vh' }}>
      <ul className="lap-list">
        {firstLap}
        {
          
          laps.map((lap, idx, lapList) => {
            let cssClassName = 'white';
            if (idx === minLapIndex || idx === maxLapIndex) {
              idx === minLapIndex ? cssClassName = 'green' : cssClassName = 'red';
            }
            
            return (
              <Lap
                key={idx}
                lap={lap}
                lapNum={lapList.length - idx}
                cssClassName={cssClassName}
              />
            );
          })
        }
      </ul>
    </div>
  );
}