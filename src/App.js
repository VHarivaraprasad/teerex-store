import React from 'react';
import './App.css'; 
import Header from './components/Header';  
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';  
import { Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Header /> {/* Add Header to the top of the page */}

      
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/cart" element={<CartPage />} /> 
      </Routes>
    </div>
  );
}

export default App;






