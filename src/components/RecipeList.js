// RecipeList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  // RecipeList.js
  useEffect(() => {
    // Fetch recipes from Spoonacular API
    const apiKey = 'YOUR_SPOONACULAR_API_KEY'; // Replace with your API key
    axios.get(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${apiKey}`)
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
