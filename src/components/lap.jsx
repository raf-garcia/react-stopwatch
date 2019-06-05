import React, { Component } from 'react';

export default class Lap extends Component {
  render() {
    const { lap, lapNum } = this.props;
    
    return(
      <li className="lap-item">
        <span>{`Lap ${lapNum}`} </span>
        <span>{ lap }</span>
      </li>
    );
  }
}