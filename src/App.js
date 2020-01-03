import React, {useState, useEffect} from 'react';
import { Route, NavLink, useLocation } from 'react-router-dom';
import './index.css';
import Account from './Components/Account.js';

function App() {
  
  return (
    <div>
      <header className='header'>
        <div>
          <NavLink className='navLink' to='/Account'><h2>{`Squall`}</h2></NavLink>
        </div>
        <nav>
          {/* <NavLink className='navLink' to='/'>Home</NavLink> */}
          <NavLink className='navLink' to='/'>About</NavLink>
          <NavLink className='navLink' to='/'>How it works</NavLink>
          <NavLink className='navLink' to='/Login'>Login</NavLink>
          {/* <NavLink className='navLink' to='/Account'>Account</NavLink> */}
          {/* <NavLink className='navLink' to='/Contact'>Contact</NavLink> */}
        </nav>
      </header>
      
        <Route exact path='/Account' render={props => <Account {...props} />} />

      <footer>
          <p>2019 Ⓒ Squall</p>
      </footer>
    </div>
  );
}

export default App;
