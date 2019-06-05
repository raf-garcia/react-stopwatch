import React from 'react';

const Buttons = (props) => {
  const { initialStart, isRunning, start, stop, reset, addLap } = props;
  let lapResetButtonText, startStopButtonText;
  let lapResetFunction, startStopFunction;
  let lapResetButtonDisabled;

  if (initialStart) {
    lapResetButtonText = "Lap";
    lapResetButtonDisabled = true;
    startStopButtonText = "Start";
    startStopFunction = start;
  } else if (isRunning) {
    lapResetButtonText = "Lap";
    lapResetFunction = addLap;
    lapResetButtonDisabled = false;
    startStopButtonText = "Stop";
    startStopFunction = stop;
  } else {
    lapResetButtonText = "Reset";
    lapResetFunction = reset;
    startStopButtonText = "Start";
    startStopFunction = start;
  }

  return (
    <div className='buttons'>
      {/* lap and reset btn */}
      <button onClick={lapResetFunction} disabled={lapResetButtonDisabled}> {lapResetButtonText} </button>

      {/* start and stop btn */}
      <button onClick={startStopFunction}> {startStopButtonText} </button>
    </div>
  );
}

export default Buttons;