import React, {useState, useEffect} from 'react';
import { Route, NavLink } from 'react-router-dom';
import './index.css';
import Account from './Components/Account.js';
import Landing from './Components/Landing';
import Login from './Components/Login';

function App() {
  
  
  return (
    <div>
      <header className='header'>
        <div>
          <NavLink className='navLink' to='/'><h2>Squall</h2></NavLink>
        </div>
        <nav> 
          <p>About</p>
          <NavLink className='navLink' to='/'>How it works</NavLink>
          <NavLink className='navLink' to='/Login'>Login</NavLink>
          <NavLink className='navLink' to='/'>Get Started</NavLink>
        </nav>
      </header>

        <Route exact path='/' render={props => <Landing {...props} />} />
        <Route exact path='/Account' render={props => <Account {...props} />} />
        <Route exact path='/Login' render={props => <Login {...props} />} />
      <footer>
          <p>2019 Ⓒ Squall</p>
      </footer>
    </div>
  );
}

export default App;
