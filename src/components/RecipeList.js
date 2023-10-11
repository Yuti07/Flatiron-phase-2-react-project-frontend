import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
  // State to hold the list of recipes
  const [recipes, setRecipes] = useState([]);

  // Effect hook to fetch recipes when the component mounts
  useEffect(() => {
    // Fetching recipes from the API using Axios
    axios.get('http://localhost:5173/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div>
      {/* Displaying a heading for the recipe list */}
      <h2>Featured Recipes </h2>
      {/* Displaying a list of recipes with links to their details */}
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            {/* Creating a link to the details page for each recipe */}
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
