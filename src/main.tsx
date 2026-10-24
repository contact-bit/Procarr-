import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './styles/global.css';
import { HelmetProvider } from 'react-helmet-async';
import { CookieConsentProvider } from './consent/CookieConsentContext';
import { ConsentBasedAnalytics } from './consent/ConsentBasedAnalytics';
import { HDMonitor } from './analytics/HDMonitor';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <CookieConsentProvider>
        <BrowserRouter>
          <App />
          <ConsentBasedAnalytics />
          <HDMonitor />
        </BrowserRouter>
      </CookieConsentProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
