import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: "AIzaSyChi2lmfUmmg2z3Afzbh_R6VO3LALisVpM",
  authDomain: "lentes44970.firebaseapp.com",
  projectId: "lentes44970",
  storageBucket: "lentes44970.appspot.com",
  messagingSenderId: "170127293498",
  appId: "1:170127293498:web:7a283cbc1a5de1c2b24903"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();