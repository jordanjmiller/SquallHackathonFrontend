import React, {useState, useEffect} from 'react';
import { Route, NavLink, useHistory } from 'react-router-dom';
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
  const history = useHistory();
  console.log('app: current user', currentUser);

  useEffect(() => {
    console.log('app useeffect firing')
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
  
  const logOut = () => {
    sessionStorage.removeItem('token');
    setCurrentUser('');
    history.push('/');
  }


  return (
    <StyledLoader active={loading} spinner text='Loading...'> 
      <div>
        {(()=>{
          if (currentUser){
            return <header className='header'>
              <div>
                <NavLink className='navLink' to='/'><h2>Squall</h2></NavLink>
              </div>
              <nav> 
                <p onClick={logOut}>Log Out</p>
              </nav>
            </header>
          }
          else{
            return <header className='header'>
              <div>
                <NavLink className='navLink' to='/'><h2>Squall</h2></NavLink>
              </div>
              <nav> 
                <p>About</p>
                <p>How it works</p>
                <NavLink className='navLink' to='/Login'>Login</NavLink>
                <p>Get Started</p>
              </nav>
            </header>
          }
        })()}

          <Route exact path='/' render={props => <Landing {...props} />} />
          <Route exact path='/Account' render={props => <Account {...props} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route exact path='/Login' render={props => <Login {...props} />} />
        <footer>
            <p>2019 Ⓒ Squall</p>
        </footer>
      </div>
    </StyledLoader>
  );
}

export default App;
