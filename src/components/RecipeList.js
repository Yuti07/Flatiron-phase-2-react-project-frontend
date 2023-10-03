// RecipeList.js
import React, { useState, useEffect } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from API
    // Example: Fetching from a json-server
    fetch('http://localhost:3000/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
