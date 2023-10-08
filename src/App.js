import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeForms from './components/RecipeForms';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  }
  return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/recipes">
              <RecipeList />
            </Route>
            <Route path="/add">
              <RecipeForm addRecipe={addRecipe} />
            </Route>
            <Route path="/">
              <h2>Home</h2>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default App
