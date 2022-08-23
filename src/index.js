import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GA4React from 'react-ga';

const ga4react = new GA4React('G-884HZWW40Y');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

(async () => {
  await ga4react.initialize();

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})();
