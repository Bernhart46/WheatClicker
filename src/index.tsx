import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { reportWebVitals, logPerformance } from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(logPerformance);

/*
  https://wanago.io/2022/02/07/measuring-performance-web-vitals-react/
  For the WebVitals meanings
*/
