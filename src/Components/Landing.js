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

export default function Landing() {
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail]= useState('');
    const [phoneNumber, setPhoneNumber]= useState('');
    const [city, setCity]= useState('');
    const [password, setPassword]= useState('');
    const [verifyPassword, setVerifyPassword]= useState('');
    
    const history = useHistory();
  
    const handleChange = e => {
      if(e.target.name === 'firstName'){
        setFirstName(e.target.value);
      }
      else if(e.target.name === 'lastName'){
        setLastName(e.target.value);
      }
      else if(e.target.name === 'email'){
        setEmail(e.target.value);
      }
      else if(e.target.name === 'phoneNumber'){
        setPhoneNumber(e.target.value);
      }
      else if(e.target.name === 'city'){
        setCity(e.target.value);
      }
      else if(e.target.name === 'password'){
        setPassword(e.target.value);
      }
      else if(e.target.name === 'verifyPassword'){
        setVerifyPassword(e.target.value);
      }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (firstName && lastName && email && phoneNumber && city && password && verifyPassword && password === verifyPassword){
            const newUser ={firstname: firstName, lastname: lastName, email: email, phonenumber: phoneNumber, city: city, password: password,
            extremeCold: true, extremeHot: true, highWinds: true, heavyRain: true, lightning: true, hail: true,
            flashFlooding: true, snowShowers: true, blizzard: true, tornado: true,}
            setLoading(true);
            axios
            .post("https://squallhackathon.herokuapp.com/api/auth/register", newUser)
            .then(res => {
            axios
                .post("https://squallhackathon.herokuapp.com/api/auth/login", {
                email: newUser.email,
                password: newUser.password
                })
                .then(res => {
                sessionStorage.setItem("token", res.data.token);
                setLoading(false);
                history.push('/Account');
                })
                .catch(err => {
                console.log("SignUp Login Catch Error: ", err.response.data.message);
                setLoading(false);
                alert(err.response.data.message);
                });
            })
            .catch(err => {
            console.log("SignUp Catch Error: ", err.response.data.message);
            setLoading(false);
            alert(err.response.data.message);
            });
        }
        else{
            console.log('something went wrong man i dunno');
        }
    };


    return (
        <StyledLoader active={loading} spinner text='Loading...'> 
            <div className='landingContainer'>
                <div className='landingWeather'>
                    <div className='landingWeatherInner'> 
                        <h2>Weather can change in an instant.</h2>
                        <p>Squall sends you a text every time there’s a sudden and unforeseen weather event.</p>
                        <div>
                            <button style={{backgroundColor: '#0E93DE', color: 'white'}}>Get Started</button>
                            <button style={{backgroundColor: 'white', color: '#0E93DE', border: '2px solid #0E93DE'}}>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='landingHowIt'>
                    <div className='landingHowItInner'>
                        <h2>How it Works</h2>
                        <div>
                            <h3>Sign up to receive texts</h3>
                            <p>Enter your phone number to get started and our team will be in touch through text.</p>
                        </div>
                        <div>
                            <h3>Never miss a squall</h3>
                            <p>We notify you once an incoming and unforeseen weather event is on the horizon.</p>
                        </div>
                        <div>
                            <h3>Customize your Account</h3>
                            <p>Effortlessly disable notifications or select the specific squall you want on the radar.</p>
                        </div>
                    </div>
                </div>
                <div className='landingBoulderites'>
                    <div className='landingBoulderitesInner'>
                        <h2>Our Service</h2>
                        <p>Weather is unpredictable. You might have started the day in short sleeves, but as the day goes on the temperature drops
                             and now it's hailing. Sudden weather changes are uncomfortable when you’re not ready for them. With Squall, we send you 
                             text notifications when there’s an incoming weather event so that you can make a plan.
                        </p>
                    </div>
                </div>
                <div className='landingGetStarted'>
                    <div className='landingGSInnerDiv'>
                        <h2>Get Started</h2>
                        <p>Enter your information to sign up for alerts</p>
                        <input className='landingInputHalf' name='firstName' type='Text' required placeholder='First Name' onChange={handleChange}/>
                        <input className='landingInputHalf' name='lastName' type='Text' required placeholder='Last Name' onChange={handleChange}/>
                        <input className='landingInputFull' name='email' type='email' required placeholder='Email' onChange={handleChange}/>
                        <input className='landingInputHalf' name='phoneNumber' type='tel' required placeholder='Phone (Ex. 123456789)' onChange={handleChange}/>
                        <select className='landingInputHalf' name='city' required onChange={handleChange}>
                            <option value="none" selected disabled hidden> Select Your City </option> 
                            <option value="Seattle">Seattle</option>
                            <option value="Boulder">Boulder</option>
                            <option value="New York City">New York City</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="Miami">Miami</option>
                        </select>
                        <input className='landingInputFull' type='password' name='password' required placeholder='Password' onChange={handleChange}/>
                        <input className='landingInputFull' type='password' name='verifyPassword' required placeholder='Confirm Password' onChange={handleChange}/>
                        <button onClick={handleSubmit}>Sign Up</button>
                    </div>
                </div>
            </div>
        </StyledLoader>
    )
}
