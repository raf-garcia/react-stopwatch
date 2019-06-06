import React, { Component } from 'react';

// lap component
import Lap from './lap';

// util
import { 
  displayTimeFormat,
  getMaxLapTimeIndex,
  getMinLapTimeIndex
} from '../util/format';

export default class LapList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laps: [],
      maxLapIndex: null,
      minLapIndex: null
    };
  }
  
  static getDerivedStateFromProps(props, state) {
    if (props.laps.length !== state.laps.length) {
      // debugger
      return { 
        laps: props.laps,
        maxLapIndex: getMaxLapTimeIndex(props.laps),
        minLapIndex: getMinLapTimeIndex(props.laps)
      };
    }
    
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.laps.length !== prevProps.laps.length) {
      this.setState({ 
        minLapIndex: getMinLapTimeIndex(this.props.laps),
        maxLapIndex: getMaxLapTimeIndex(this.props.laps)
      })
    }
  }
  

  
  render() {
    console.log(this.state)
    const { laps, firstLapTimeElapsed } = this.props;

    let firstLap;
    if (parseInt(firstLapTimeElapsed) === 0) {
      firstLap = null;
    } else {
      firstLap = <li className="lap-item">
        <span>{`Lap ${laps.length + 1}`} </span>
        <span>{displayTimeFormat(firstLapTimeElapsed)}</span>
      </li>;
    }
    // debugger

    return(
      <div style={{height: '25vh'}}>
        <ul className="lap-list">
          { firstLap }
          {
            laps.map((lap, idx, lapList) => (
              <Lap
                key={idx}
                lapIdx={idx}
                lap={lap}
                lapNum={lapList.length - idx}
              />
            )) 
          }
        </ul>
      </div>
    );
  }
}