import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail'; 
import './App.css';
console.log('ProductDetail =', ProductDetail);

const App = () => (
  
  <Router>
    <Routes>
      
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} /> 
    </Routes>
  </Router>
);

export default App;
