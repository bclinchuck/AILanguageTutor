import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './theme/themeContext';
import { AccentProvider } from './theme/accentContext';
import { ThemeToggle } from './components/ThemeToggle';
import { AccentSchemeToggle } from './components/AccentSchemeToggle';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AccentProvider>
        <ThemeToggle />
        <AccentSchemeToggle />
        <App />
      </AccentProvider>
    </ThemeProvider>
  </React.StrictMode>
);
