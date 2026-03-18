/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App';
import BookingContextProvider from './contexts/BookingContext';
import ThemeContextProvider from './contexts/ThemeContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <BookingContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </BookingContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
