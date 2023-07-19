import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control search-input"
        placeholder="Buscar receta..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary search-button">Buscar</button>
    </form>
  );
};

export default SearchBar;
