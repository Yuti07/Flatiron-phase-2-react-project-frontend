import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddNewRecipe = ({ onAddNewRecipe }) => {
  const history = useHistory();

  //set form data state variable
  const [formData, setFormData] = useState ({title:"", ingredients:'', instructions:"", image:""})

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()

    // Split the ingredients input into an array for db.json array setup
    const ingredientsArray = formData.ingredients.split(',').map(ingredient => ingredient.trim());

    //create an object from input form
    const itemData = {title: formData.title, ingredients: ingredientsArray, instructions: formData.instructions, image: formData.image}

    // fetch POST and state (onAddNewRecipe prop) update
    axios
      .post('https://backend-phase-2-project-tdz5.onrender.com/recipes', itemData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(newRecipe=> {
        onAddNewRecipe(newRecipe.data) //THIS STATE UPDATE IS REQUIRED!!!

        setFormData({title:"", ingredients:'', instructions:"", image:""}) //clears form

        // Navigate to the homepage after adding the recipe
        history.push('/');
      })
      .catch(error=> {
        // Handle any errors that may occur during the POST request
        console.error(error);
      })
  }

  function handleClick(){
    alert ("Successfully Added To List")
  }

  return (
    <>
    <hr />
    <h2>Add New Recipe:</h2>
    <form onSubmit={handleSubmit}>
      <h4>Recipe Name: <input type="text" name="title" onChange={handleChange} value={formData.title} placeholder="enter recipe name..."/></h4>
      <h4>Ingredients: <input type="text" name="ingredients" onChange={handleChange} value={formData.ingredients} placeholder="ingredient, ingredient, ingredient,..."/></h4>
      <h4>Instructions: <input type="text" name="instructions" onChange={handleChange} value={formData.instructions} placeholder="enter instructions..."/></h4>
      <h4>Image URL: <input type="text" name="image" onChange={handleChange} value={formData.image} placeholder="enter image url..."/></h4>
      <button type="submit" onClick={handleClick}>Add Recipe</button>
    </form>
    <hr />
  </>
    )
}
export default AddNewRecipe