import React, { Component } from 'react';

// lap component
import Lap from './lap';

export default class LapList extends Component {
  render() {
    const { laps } = this.props
    return(
      <div>
        <ul>
          {
            laps.map( (lap, idx, lapArr) => (
              <Lap key={idx} lap={lap} lapArr={lapArr} />
            ))
          }
        </ul>
      </div>
    );
  }
}