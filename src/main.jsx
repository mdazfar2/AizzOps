import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // Updated extension
import './index.css';

// Removed the '!' after getElementById
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Remove any stale service workers from older builds to avoid fetch/clone errors.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });

  if (window.caches?.keys) {
    caches.keys().then((keys) => keys.forEach((key) => caches.delete(key)));
  }
}

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);