import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, hashHistory as history } from 'react-router';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
