import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ NO HashRouter here
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
