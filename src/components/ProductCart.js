import React from 'react';
import './ProductCart.css';

const ProductCart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <h2>Your Cart</h2>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{product.name}</h4>
                <p>Price: ₹{product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: ₹{totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCart;

