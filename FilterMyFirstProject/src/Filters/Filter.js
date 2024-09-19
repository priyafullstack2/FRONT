import React, { useState } from 'react';
import './Filters.css';

const FilterableList = () => {
  const [filter, setFilter] = useState('');
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
  ];

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="filterable-list">
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={handleChange}
        className="filter-input"
      />
      <ul className="item-list">
        {filteredItems.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableList;