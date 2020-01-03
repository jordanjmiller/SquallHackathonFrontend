import React, {useState, useEffect} from 'react';
import { Route, NavLink } from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth.js';
import './index.css';
import Account from './Components/Account.js';
import Landing from './Components/Landing';
import Login from './Components/Login';

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [loading, setLoading] = useState(false);
  console.log('app: current user', currentUser);

  useEffect(() => {
      if (!currentUser && sessionStorage.getItem('token')){
        setLoading(true);
        axiosWithAuth().get('/users/user')
        .then(res =>{
          console.log('getcurrentuser res: ', res);
          setCurrentUser(res.data);
          setLoading(false);
        })
        .catch((err)=>{console.log('app useeffect get current user', err)
        setLoading(false);})
      }
  }, [currentUser, loading])
  
  return (
    <StyledLoader active={loading} spinner text='Loading...'> 
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
    </StyledLoader>
  );
}

export default App;
