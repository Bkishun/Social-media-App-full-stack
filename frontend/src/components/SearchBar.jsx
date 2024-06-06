import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-l-md"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-red-700 text-white rounded-r-md hover:bg-red-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
