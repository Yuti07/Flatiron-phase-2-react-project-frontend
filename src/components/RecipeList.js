// RecipeList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    // Fetching recipes from  API
    const apiKey = 'http://localhost:3000/recipes';
    axios.get(`http://localhost:3000/recipes/${id}`)
      .then(response => setRecipes(response.data.recipes))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div>
      <h2>Featured Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
