import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {

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