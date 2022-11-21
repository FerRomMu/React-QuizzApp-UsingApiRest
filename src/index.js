import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DifficultyProvider } from './context/DifficultyContext';
import { QuizzProvider } from './context/QuizzContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DifficultyProvider>
    <QuizzProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QuizzProvider>
  </DifficultyProvider>
);