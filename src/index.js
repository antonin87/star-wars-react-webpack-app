import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/reset.css';
import './css/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();