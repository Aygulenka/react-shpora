import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css'

const root = document.getElementById('root');

// Импортируйте createRoot из "react-dom/client"
const rootElement = createRoot(root);
rootElement.render(<App />);