import React from 'react';
import './i18n';
import ReactDOM from 'react-dom/client';
import './index.scss'
import App from './App';
import { ModalProvider } from './providers/ModalProvider';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);