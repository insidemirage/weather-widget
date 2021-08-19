import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 2 variants for older or not supporting browser
const rootElement = document.getElementById('weather-widget') || document.getElementsByTagName('weather-widget')[0];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
