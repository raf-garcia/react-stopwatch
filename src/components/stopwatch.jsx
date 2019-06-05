import React, { Component } from 'react';

// Components
import Buttons from './buttons';

const setDefaultState = () => ({
  initialStart: true,
  isRunning: false,
  startTime: 0,
  stopTime: 0,
  timeElapsed: 0,
  laps: []
});

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = setDefaultState();

    this.intervalId = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  padZero(number) {
    return number < 10 ? "0" + number : number.toString();
  }

  displayTimeFormat(milliseconds) {
    let displayMilliseconds = Math.floor((milliseconds / 10) % 100);
    let displaySeconds = Math.floor((milliseconds / 1000) % 60);
    let displayMinutes = Math.floor((milliseconds / 1000) / 60);
    
    return `${ this.padZero( displayMinutes ) }:${ this.padZero( displaySeconds ) }.${ this.padZero( displayMilliseconds ) }`;
  }
    
  firstStart() {
    this.setState({ startTime: Date.now(), initialStart: false });
  }

  // start timer
  start() {
    let offset = Date.now() - this.state.stopTime;
    debugger
    if (this.state.initialStart) {
      this.firstStart();
    } else {
      this.setState({ startTime: this.state.startTime + offset })
    }
    
    this.intervalId = setInterval( () => {
      this.setState({ isRunning: true, timeElapsed: Date.now() - this.state.startTime });
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
  
  render() {
    const { initialStart, isRunning } = this.state;
    
    return (
      <div className="main-stopwatch">
        { this.displayTimeFormat( this.state.timeElapsed ) }

        <Buttons
          initialStart={ initialStart }
          isRunning={ isRunning }
          start={ this.start }
          stop={ this.stop }
          reset={ this.reset }
          addLap={ () => console.log('Invoke Add Lap function') }
          />
      </div>
    )
  }
}
