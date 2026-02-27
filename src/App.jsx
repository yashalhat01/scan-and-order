import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Payment from './pages/Payment';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
