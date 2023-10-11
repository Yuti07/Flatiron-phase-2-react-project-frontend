import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  // Extracting the 'id' parameter from the URL using the 'useParams' hook
  const { id } = useParams();

  // State to hold the details of the recipe
  const [recipe, setRecipe] = useState(null);

  // Effect hook to fetch recipe details when the component mounts or 'id' changes
  useEffect(() => {
    // Fetching recipe details from the API using Axios
    axios.get(`http://localhost:3000/recipes/${id}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching recipe details:', error));
  }, [id]);

  // If recipe details are not available yet, show a loading message
  return (
    <div>
      {/* Nullish coalescing check */}
      {recipe ? (
        <>
          {/* Displaying the recipe title */}
          <h2>{recipe.title}</h2>

          {/* Displaying an image related to the recipe */}
          <img src={process.env.PUBLIC_URL + '/VeggieLeaf.png'} alt={recipe.title} />

          {/* Displaying the list of ingredients */}
          <p>{recipe.ingredients.join(', ')}</p>

          {/* Displaying the recipe instructions */}
          <p>{recipe.instructions}</p>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RecipeDetails;
