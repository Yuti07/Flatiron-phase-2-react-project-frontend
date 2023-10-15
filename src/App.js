import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchForm from './components/SearchForm';
import AddNewRecipe from './components/AddNewRecipe';
import NavBar from './components/NavBar';
import axios from 'axios'
import './index.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get('https://backend-phase-2-project-tdz5.onrender.com/recipes')
    .then(response => setRecipes(response.data))
    .catch(error => {
      console.error('Error fetching recipes:', error)
      setLoading(true); // Set loading to false on error as well
    });
  }, []);

  //add book cb + state update
  function handleAddNewRecipe (newRecipe) {
    setRecipes([...recipes, newRecipe]) // Updating recipes state.
    }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
        ) : (
          <Router>
              <Header />
              <NavBar />
              <Switch>
                <Route path="/recipes/:id">
                  <RecipeDetails />
                </Route>
                <Route path="/search">
                  <SearchForm />
                </Route>
                <Route path="/" exact>
                  <RecipeList recipes={recipes} />
                </Route>
                <Route>
                  <AddNewRecipe onAddNewRecipe={handleAddNewRecipe} />
                </Route>
              </Switch>
          </Router>
        )
      }
    </>
  );
}
export default App;