import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Payment from "./Payment"
import {Routes, Route} from "react-router"


ReactDOM.render(
  <React.StrictMode>
    <Route path='/' element={<App />} />
      <Route path='/admin' element={<Payment />} />
    
  </React.StrictMode>,
  document.getElementById('root')
);


