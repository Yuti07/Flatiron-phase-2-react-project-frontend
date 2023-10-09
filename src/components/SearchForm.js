// SearchForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to search results
    history.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div>
      <h2>Search Recipes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
