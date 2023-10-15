import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
  // State to hold the list of recipes
    const [recipes, setRecipes] = useState([]);
    // Effect hook to fetch recipes when the component mounts
    useEffect(() => {
        // Fetching recipes from the API using Axios
        axios.get('https://backend-phase-2-project-tdz5.onrender.com/recipes')
        .then(response => setRecipes(response.data))
        .catch(error => console.error('Error fetching recipes:', error));
    }, []);

  return (
    <div>
      <h2>Featured Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
            {/* Displaying recipes links */}
              <p>{recipe.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;