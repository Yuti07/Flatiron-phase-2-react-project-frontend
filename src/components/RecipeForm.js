// RecipeForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send POST request to add a new recipe
    axios.post('http://localhost:3001/recipes', { title })
      .then(response => console.log('Recipe added successfully:', response.data))
      .catch(error => console.error('Error adding recipe:', error));

    // Clear the form
    setTitle('');
  };

  return (
    <div>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
