import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // Import App component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.render(
  <BrowserRouter>
    <App /> {/* Wrap App component in BrowserRouter */}
  </BrowserRouter>,
  document.getElementById('root')
);


