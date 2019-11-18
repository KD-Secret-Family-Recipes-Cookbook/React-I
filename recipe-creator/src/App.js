import React from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Registration from './components/Registration';
import RecipeForm from './components/RecipeForm';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <NavBar />
        {/* <PrivateRoute exact path='recipes' component={RecipeList} /> */}
        <Route path='/login' component={Login} />
        <Route path='/register' component={Registration} />
        <Route path='/' component={RecipeForm} />
      </main>
    </Router>
  );
}

export default App;