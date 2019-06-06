import React, { Component } from 'react';

export default class Lap extends Component {
  render() {
    const { lap, lapNum, lapIdx } = this.props;
    // debugger
    
    return(
      <li className="lap-item">
        <span>{`Lap ${lapNum}`} </span>
        <span>{ lap }</span>
      </li>
    );
  }
}