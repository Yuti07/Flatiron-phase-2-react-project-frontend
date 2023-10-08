// RecipeDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

// RecipeDetails.js
// ... (existing code)

useEffect(() => {
    // Fetch recipe details from Spoonacular API
    const apiKey = 'YOUR_SPOONACULAR_API_KEY'; // Replace with your API key
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching recipe details:', error));
  }, [id]);

  // ... (existing code)

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.summary}</p>
    </div>
  );
};

export default RecipeDetails;
