
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Add Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
// Add Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
