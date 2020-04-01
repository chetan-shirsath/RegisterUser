import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import { Login, Register}   from './Components/SignIn/index';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-aside">

      </div>
      <div className="App-form">
            <div className="PageSwitcher">
              <NavLink to="/signIn" activeClassName="PageSwitcher__Item--Active" className = "PageSwitcher__Item">Sign - In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className = "PageSwitcher__Item">Sign - Up</NavLink>
            </div>
            <Route exact path='/'><Register /></Route>
            <Route path='/signIn'><Login /></Route>
      </div>

      
    </div>
    </Router>
  );
}

export default App;
