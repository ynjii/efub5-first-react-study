import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chapter_04/clock';

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18 방식

function tick() {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}

setInterval(tick, 1000); // 1초마다 tick 함수 실행

reportWebVitals();
