// src/pages/CartPage.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';
const CartPage = () => {
  const location = useLocation();
  const { cart } = location.state || {}; 

  return (
    <div>
      <h2>Cart</h2>
      {cart && cart.length > 0 ? (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>Price: ₹{product.price}</p>
            </div>
          ))}
          {/* <Link to="/">
            <button>Continue Shopping</button>
          </Link> */}
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default CartPage;
