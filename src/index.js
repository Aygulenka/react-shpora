<<<<<<< HEAD
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

=======
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css'

const root = document.getElementById('root');

// Импортируйте createRoot из "react-dom/client"
const rootElement = createRoot(root);
rootElement.render(<App />);
>>>>>>> a8809cbb6b49448df244dffa991779236cb05f8d
