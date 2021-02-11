import React from 'react';

// lap component
import { Lap } from './lap';

// util
import { displayTimeFormat } from '../util/format';

export const LapList = ({
  laps,
  firstLapTimeElapsed,
  maxLapIndex,
  minLapIndex
}) => {
  let firstLap;
  if (parseInt(firstLapTimeElapsed) === 0) {
    firstLap = null;
  } else {
    // (Christi): nit wrap multiline components set to variables in parentheses
    firstLap = (
      <li className='lap-item'>
        <span>{`Lap ${laps.length + 1}`} </span>
        <span>{displayTimeFormat(firstLapTimeElapsed)}</span>
      </li>
    );
  }

  return (
    /* (Christi): it is an antipattern to use the style prop.
        while they have the highest specificity, you usually end up
        repeating yourself all over the place and it becomes messy 
        to maintain since you've split your styles between the inline and
        stylesheets.
    */
    <div style={{ height: '25vh' }}>
      <ul className='lap-list'>
        {firstLap}
        {laps.map((lap, idx, lapList) => {
          /* (Christi): instead of reassigning the classNames this way
              better practice is to use the classnames package where
              you can use logic to determine your classnames in 
              a cleaner way.
              see: https://github.com/JedWatson/classnames
              this package will prevent you from inlining logic like this
          */
          let cssClassName = 'white';
          if (idx === minLapIndex || idx === maxLapIndex) {
            idx === minLapIndex
              ? (cssClassName = 'green')
              : (cssClassName = 'red');
          }

          return (
            <Lap
              key={idx}
              lap={lap}
              lapNum={lapList.length - idx}
              cssClassName={cssClassName}
            />
          );
        })}
      </ul>
    </div>
  );
};
