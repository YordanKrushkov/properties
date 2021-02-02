import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseState from './useState'
ReactDOM.render(
<React.StrictMode>
    <UseState>
      <App />
    </UseState>   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
