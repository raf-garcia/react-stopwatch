import React from 'react';
// (Christi): always remove commented out code.
// This is considered messy and rude to other developers who interact with the codebase
// because 9 times out of 10 you will never go back and uncomment that code

// import logo from './logo.svg';
import './App.css';

// (Christi): rule of thumb is only add comments for code that is particularly
// hard to understand or that needs to use an antipattern
// Components
import Stopwatch from './components/stopwatch';

function App() {
  return (
    <div className='App'>
      <Stopwatch />
    </div>
  );
}

export default App;
