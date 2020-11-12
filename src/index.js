import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import configureStore from './shared/redux/store';


async function init() {
  console.log('Waiting for store');

  await configureStore();
  console.log('Store was fully loaded');

  ReactDOM.render(<App />, document.getElementById('root'));
  console.log('rendering');

  reportWebVitals();
}
init();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
