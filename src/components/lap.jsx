import React, { Component } from 'react';

export default class Lap extends Component {
  render() {
    const { lap, time } = this.props;
    
    return(
      <li>
        <span>{`Lap ${lap}`}</span>
        <span>{ time }</span>
      </li>
    );
  }
}