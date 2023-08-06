import React from 'react';

const SearchBar = ({ onSearchChange }) => {
  const handleInputChange = (event) => {
    const searchText = event.target.value;
    onSearchChange(searchText);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleInputChange} />
    </div>
  );
};

export default SearchBar;
