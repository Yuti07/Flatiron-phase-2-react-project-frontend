// RecipeDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

useEffect(() => {
    // Fetching recipe details from  API
    const apiKey = 'http://localhost:3000/recipes';
    axios.get(`http://localhost:3000/recipes/${id}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching recipe details:', error));
  }, [id]);


  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img alt={recipe.title} />
      <p>{recipe.ingredients}</p>
    </div>
  );
};

export default RecipeDetails;
