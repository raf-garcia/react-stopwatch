import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* 
  (Christi): always wrap it blocks in describe blocks.
  The pattern should be the describe block starts 'when this happens'
  it 'should do x'.
  In addition, always include functionality testing in addition to checking 
  if something renders and include more than happy path scenarios (where you
  expect something to work).
  see: https://medium.com/selleo/testing-react-components-best-practices-2f77ac302d12
*/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
