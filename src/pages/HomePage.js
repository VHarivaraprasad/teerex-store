import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import '../HomePage.css';
import { FaShoppingCart } from 'react-icons/fa';
// import ProductCart from '../components/ProductCart';


const HomePage = () => {
  const [filters, setFilters] = useState({
    gender: [],
    colour: [],
    priceRange: [0, 100],
    type: [],
  });

  const [cart, setCart] = useState([]);
    
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= 2) {
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  
  const handleGenderChange = (event) => {
    const value = event.target.value;
    setFilters((prevFilters) => {
      const newGender = prevFilters.gender.includes(value)
        ? prevFilters.gender.filter((item) => item !== value)
        : [...prevFilters.gender, value];
      return { ...prevFilters, gender: newGender };
    });
  };

  
  const handleColourChange = (event) => {
    const value = event.target.value;
    setFilters((prevFilters) => {
      const newColour = prevFilters.colour.includes(value)
        ? prevFilters.colour.filter((item) => item !== value)
        : [...prevFilters.colour, value];
      return { ...prevFilters, colour: newColour };
    });
  };

  
  const handlePriceChange = (event) => {
    const value = parseInt(event.target.value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: [0, value],
    }));
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setFilters((prevFilters) => {
      const newType = prevFilters.type.includes(value)
        ? prevFilters.type.filter((item) => item !== value)
        : [...prevFilters.type, value];
      return { ...prevFilters, type: newType };
    });
  };

  




  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  return (
    <div className="homepage">
      <div className="filters-section">
        <h3>Filters</h3>
        <div>
          <label>Gender</label>
          <div>
            <input
              type="checkbox"
              value="men"
              onChange={handleGenderChange}
              checked={filters.gender.includes('men')}
            />
            <label>Men</label>
            <input
              type="checkbox"
              value="women"
              onChange={handleGenderChange}
              checked={filters.gender.includes('women')}
            />
            <label>Women</label>
          </div>
        </div>

        <div>
          <label>Type</label>
          <div>
            <input
              type="checkbox"
              value="polo"
              onChange={handleTypeChange}
              checked={filters.type.includes('polo')}
            />
            <label>Polo</label>
            <input
              type="checkbox"
              value="plain"
              onChange={handleTypeChange}
              checked={filters.type.includes('plain')}
            />
            <label>Plain</label>
            <input
              type="checkbox"
              value="graphic"
              onChange={handleTypeChange}
              checked={filters.type.includes('graphic')}
            />
            <label>Graphic</label>
          </div>
        </div>

        <div>
          <label>Colour</label>
          <div>
            <input
              type="checkbox"
              value="red"
              onChange={handleColourChange}
              checked={filters.colour.includes('red')}
            />
            <label>Red</label>
            <input
              type="checkbox"
              value="blue"
              onChange={handleColourChange}
              checked={filters.colour.includes('blue')}
            />
            <label>Blue</label>
            <input
              type="checkbox"
              value="black"
              onChange={handleColourChange}
              checked={filters.colour.includes('black')}
            />
            <label>Black</label>
            <input
              type="checkbox"
              value="yellow"
              onChange={handleColourChange}
              checked={filters.colour.includes('yellow')}
            />
            <label>Yellow</label>
            <input
              type="checkbox"
              value="white"
              onChange={handleColourChange}
              checked={filters.colour.includes('white')}
            />
            <label>White</label>
            <input
              type="checkbox"
              value="brown"
              onChange={handleColourChange}
              checked={filters.colour.includes('brown')}
            />
            <label>Brown</label>
          </div>
        </div>

        <div>
          <label>Price Range</label>
          <input
            type="range"
            min="100"
            max="500"
            step="50"
            value={filters.priceRange[1]}
            onChange={handlePriceChange}
          />
          <p>Up to ₹{filters.priceRange[1]}</p>
        </div>
      </div>

      {/* Render ProductList */}
      <ProductList filters={filters} addToCart={addToCart} />

      <div className="cart-section">
        <h3>Cart</h3>
        <div className="cart-icon">
          <FaShoppingCart />
          <span>{cart.length}</span>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="cart-total">
          <h4>Total Price: ₹{calculateTotalPrice()}</h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
