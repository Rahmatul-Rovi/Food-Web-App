import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // <--- Eita import thakte hobe

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* <--- App-ke eita diye wrap korte hobe */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);