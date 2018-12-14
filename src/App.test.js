import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Stage } from 'ngl';
/*global expect*/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has ngl Stage available', () => {
  expect(typeof(Stage)).toEqual("function");
});
