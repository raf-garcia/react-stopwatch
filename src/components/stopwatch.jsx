import React, { Component } from 'react';

// Components
import Buttons from './buttons';
import { LapList } from './lapList';

// utils
import {
  displayTimeFormat,
  getMaxLapTimeIndex,
  getMinLapTimeIndex
} from '../util/format';

// css
import '../css/stopwatch.css'

const setDefaultState = () => ({
  initialStart: true,
  isRunning: false,
  startTime: 0,
  stopTime: 0,
  timeElapsed: 0,
  laps: [],

  lapStartTime: 0,
  lapTimeElapsed: 0,

  maxLapIndex: -1,
  minLapIndex: -1
});

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = setDefaultState();

    this.intervalId = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.addLapToList = this.addLapToList.bind(this);
  }
  
  firstStart() {
    this.setState({ 
      startTime: Date.now(),
      lapStartTime: Date.now(),
      initialStart: false
    });
  }

  // start timer
  start() {
    let offset = Date.now() - this.state.stopTime;

    if (this.state.initialStart) {
      this.firstStart();
    } else {
      this.setState({
        startTime: this.state.startTime + offset,
        lapStartTime: this.state.lapStartTime + offset
      });
    }
    
    this.intervalId = setInterval( () => {
      this.setState({ 
        isRunning: true,
        timeElapsed: Date.now() - this.state.startTime,
        lapTimeElapsed: Date.now() - this.state.lapStartTime
      });
    }, 1);
  }

  // stop timer
  stop() {
    clearInterval(this.intervalId);
    this.setState({ isRunning: false, stopTime: Date.now() });
  }

  // reset timer
  reset() {
    this.setState( setDefaultState() );
  }

  // lap
  addLapToList() {
    this.state.laps.unshift(displayTimeFormat(this.state.lapTimeElapsed));
    let minLapIndex = getMinLapTimeIndex(this.state.laps);
    let maxLapIndex = getMaxLapTimeIndex(this.state.laps);
    
    this.setState({
      lapStartTime: Date.now(),
      laps: this.state.laps,
      minLapIndex,
      maxLapIndex
    });
  }
  
  render() {
    const {
      initialStart,
      isRunning,
      timeElapsed,
      laps,
      lapTimeElapsed,
      maxLapIndex,
      minLapIndex
    } = this.state;

    return (
      <div className="main-stopwatch">
        <h1 className="main-header">Stopwatch</h1>
        <h1 className="main-time">{displayTimeFormat(timeElapsed)}</h1>

        <Buttons
          initialStart={ initialStart }
          isRunning={ isRunning }
          start={ this.start }
          stop={ this.stop }
          reset={ this.reset }
          addLap={ this.addLapToList }
          />

        <LapList 
          laps={ laps } 
          firstLapTimeElapsed={ lapTimeElapsed }
          maxLapIndex={ maxLapIndex }
          minLapIndex={ minLapIndex }
        />
      </div>
    )
  }
}
