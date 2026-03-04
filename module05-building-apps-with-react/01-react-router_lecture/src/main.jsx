import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter enables client-side routing for the entire app */}
    {/* For other router types we would use a different component here as well */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
