import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recipes, setRecipes] = useState([]);
  // Effect hook to fetch recipes when the component mounts
  useEffect(() => {
    // Fetching recipes from the API using Axios
    axios
      .get('http://localhost:5000/recipes')
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);
  const handleSearch = () => {
    const results = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };
  return (
    <>
      <h2>Search recipes</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      {searchResults.length > 0 ? (
        <>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((recipe) => (
              <li key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No recipe found.</p>
      )
      }
    </>
  );
};
export default SearchForm;