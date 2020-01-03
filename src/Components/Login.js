import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleInput = (e) => {
        if (e.target.name === 'email'){
            setEmail(e.target.value)
        }
        else if (e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }
    const handleSubmit = () => {
        console.log('Login.js handleSubmit userCredentials:', email, password);
        let userCredentials = {email: email, password: password};
        console.log('usercreds: ', userCredentials);
        setLoading(true);
        axios.post('https://squallhackathon.herokuapp.com/api/auth/login', userCredentials)
        .then(res => {
            setLoading(false);
            console.log('axios: api/auth/login response: ', res);
            sessionStorage.setItem('token', res.data.token);
            // props.login(res.data.user);
            //redirect to open queue
            history.push('/Account');
        })
        .catch(err => {console.log('LOGIN CATCH ERROR: ', err.response.data.message);
        setLoading(false);
        alert(err.response.data.message)});
        setEmail('');
        setPassword('');
    }

    // const logOut = () => {
    //     sessionStorage.removeItem('token');
    //     props.logout();
    //     props.history.push('/');
    // }

    return (
        <StyledLoader active={loading} spinner text='Loading...'> 
            <div className='loginContainer'> 
                    <div className='loginContainerInner'>
                        <h2>Welcome Back!</h2>
                        <h3>Login to access your dashboard and customize your alerts.</h3>
                        <input className='landingInputFull' type='email' name='email' required placeholder='Email' onChange={handleInput}/>
                        <input className='landingInputFull' type='password' name='password' required placeholder='Password' onChange={handleInput}/>
                        <a href='#'>Forgot your password?</a>
                        <button onClick={handleSubmit}>Enter</button>
                    </div>
            </div>
        </StyledLoader>
    )
}
