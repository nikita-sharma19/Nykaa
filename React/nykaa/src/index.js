import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing from './Components/Routing';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);



