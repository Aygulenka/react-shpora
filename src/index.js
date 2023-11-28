// src/index.js (или index.jsx)

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Подставьте свой компонент приложения
import './index.css'; // Подставьте свои стили

ReactDOM.render(
  <BrowserRouter basename="/react-shpora">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

