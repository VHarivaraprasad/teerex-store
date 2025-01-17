import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1><strong class="one">Teerex</strong> <strong class="two">Store</strong></h1> {/* Logo or Title of your Store */}
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

