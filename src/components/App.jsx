// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/recipes/:id" component={RecipeDetails} />
          <Route path="/search" component={SearchForm} />
          <Route path="/" exact component={RecipeList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
