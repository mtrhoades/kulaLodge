import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// css imports
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// component Imports
import App from './App';
import Dashboard from './components/Dashboard';
import OrderingGuide from './components/dashboardComponents/OrderingGuide';
import Inventory from './components/dashboardComponents/Inventory';
import EmployeeScheduling from './components/dashboardComponents/EmployeeScheduling';
import Menu from './components/dashboardComponents/Menu';
import Recipes from './components/dashboardComponents/Recipes';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} /> 
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/OrderingGuide' element={<OrderingGuide />} />
        <Route path='/Inventory' element={<Inventory />} />  
        <Route path='/EmployeeScheduling' element={<EmployeeScheduling />} />  
        <Route path='/Menu' element={<Menu />} />  
        <Route path='/Recipes' element={<Recipes />} />  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



