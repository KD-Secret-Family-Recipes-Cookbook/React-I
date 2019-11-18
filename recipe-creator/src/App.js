import React from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Registration from './components/Registration';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <NavBar />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Registration} />
      </main>
    </Router>
  );
}

export default App;