import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './components/Dashboard';
import OrderingGuide from './components/OrderingGuide';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} /> 
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/OrderingGuide' element={<OrderingGuide />} />  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



