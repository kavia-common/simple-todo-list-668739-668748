import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './theme.css';
import App from './App';

/**
 * PUBLIC_INTERFACE
 * main.jsx is provided for environments that prefer a Vite-like entry.
 * CRA uses index.js by default; this file is not used by the build but kept for parity.
 */
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
