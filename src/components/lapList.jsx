import React, { Component } from 'react';

// lap component
import Lap from './lap';

// util
import { displayTimeFormat } from '../util/format';

// css
// import '../'

export default class LapList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const { laps, firstLapTimeElapsed } = this.props
    let firstLap;
    if (parseInt(firstLapTimeElapsed) === 0) {
      firstLap = null;
    } else {
      firstLap = <li className="lap-item">
        <span>{`Lap ${laps.length + 1}`} </span>
        <span>{displayTimeFormat(firstLapTimeElapsed)}</span>
      </li>;
    }
    
    return(
      <div style={{height: '25vh'}}>
        <ul className="lap-list">
          { firstLap }
          {
            laps.map( (lap, idx, lapList) => (
              <Lap key={idx} lap={lap} lapNum={lapList.length - idx} />
            ))
          }
        </ul>
      </div>
    );
  }
}