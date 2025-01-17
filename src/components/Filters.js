
import React from 'react';

const Filters = ({ filters, setFilters }) => {
  
  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;

    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (checked) {
        newFilters[name].push(value);
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
      return newFilters;
    });
  };

  return (
    <div className="filters">
      {/* Gender filter */}
      <div className="filter-category">
        <h4>Gender</h4>
        <label>
          <input
            type="checkbox"
            name="gender"
            value="men"
            checked={filters.gender.includes('men')}
            onChange={handleFilterChange}
          />
          Men
        </label>
        <label>
          <input
            type="checkbox"
            name="gender"
            value="women"
            checked={filters.gender.includes('women')}
            onChange={handleFilterChange}
          />
          Women
        </label>
      </div>

      {/* Colour filter */}
      <div className="filter-category">
        <h4>Colour</h4>
        <label>
          <input
            type="checkbox"
            name="colour"
            value="red"
            checked={filters.colour.includes('red')}
            onChange={handleFilterChange}
          />
          Red
        </label>
        <label>
          <input
            type="checkbox"
            name="colour"
            value="blue"
            checked={filters.colour.includes('blue')}
            onChange={handleFilterChange}
          />
          Blue
        </label>
        <label>
          <input
            type="checkbox"
            name="colour"
            value="black"
            checked={filters.colour.includes('black')}
            onChange={handleFilterChange}
          />
          Black
        </label>
      </div>

      {/* Price Range filter */}
      <div className="filter-category">
        <h4>Price Range</h4>
        <label>
          <input
            type="checkbox"
            name="priceRange"
            value="0-100"
            checked={filters.priceRange.includes('0-100')}
            onChange={handleFilterChange}
          />
          ₹0 - ₹100
        </label>
        <label>
          <input
            type="checkbox"
            name="priceRange"
            value="100-200"
            checked={filters.priceRange.includes('100-200')}
            onChange={handleFilterChange}
          />
          ₹100 - ₹200
        </label>
      </div>
    </div>
  );
};

export default Filters;


