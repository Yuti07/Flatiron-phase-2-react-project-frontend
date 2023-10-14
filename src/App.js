import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchForm from './components/SearchForm';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
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
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;