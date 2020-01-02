import React, {useState, useEffect} from 'react';
import { Route, NavLink, useLocation } from 'react-router-dom';
import './index.css';
// import Projects from './Components/Projects.js';

function App() {
  
  return (
    <div>
      <header className='header'>
        <div>
          <h2>{`Squall`}</h2>
        </div>
        <nav>
          {/* <NavLink className='navLink' to='/'>Home</NavLink> */}
          <NavLink className='navLink' to='/'>About</NavLink>
          <NavLink className='navLink' to='/'>How it works</NavLink>
          <NavLink className='navLink' to='/Login'>Login</NavLink>
          {/* <NavLink className='navLink' to='/Contact'>Contact</NavLink> */}
        </nav>
      </header>
      
        {/* <Route exact path='/Projects' render={props => <Projects {...props} />} /> */}
    </div>
  );
}

export default App;
