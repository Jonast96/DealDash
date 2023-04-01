import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create a root to render the React application.

const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * Render the main App component wrapped in the BrowserRouter.
 * This allows the application to use the React Router functionality.
 */
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
