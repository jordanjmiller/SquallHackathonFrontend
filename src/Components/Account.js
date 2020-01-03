import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth.js';
import axios from 'axios';

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;

export default function Account(props) {
    const [isChecked, setIsChecked] = useState([true, true, true, true, true, true, true, true, true, true]);
    const [textToggle, setTextToggle] = useState('false')
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if(props.currentUser){
            setIsChecked([
                props.currentUser.extremeCold,
                props.currentUser.extremeHot,
                props.currentUser.highWinds,
                props.currentUser.heavyRain,
                props.currentUser.lightning,
                props.currentUser.hail,
                props.currentUser.flashFlooding,
                props.currentUser.snowShowers,
                props.currentUser.blizzard,
                props.currentUser.tornado,
            ])
        }
    }, [props.currentUser])

    useEffect(() => {
        let allfalse = true;
        for(let i = 0; i < isChecked.length; i++){
            if (isChecked[i] === true){
                allfalse = false;
            }
        }
        console.log('allfalse: ', allfalse);
    }, [isChecked])

    const handleToggle = () => {

    }

    const handleClick = (e) => {
        setIsChecked(isChecked.map((value, index)=>{
            // console.log(index, Number(e.target.name));
            if (index === Number(e.target.name)){
                return !value;
            }
            else {
                return value;
            }
        }));
        // console.log(e.target.checked);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newUser ={firstname: props.currentUser.firstname, lastname: props.currentUser.lastname, email: props.currentUser.email, 
            phonenumber: props.currentUser.phonenumber, city: props.currentUser.city,
        extremeCold: isChecked[0], extremeHot: isChecked[1], highWinds: isChecked[2], heavyRain: isChecked[3], lightning: isChecked[4], hail: isChecked[5],
        flashFlooding: isChecked[6], snowShowers: isChecked[7], blizzard: isChecked[8], tornado: isChecked[9],}
        setLoading(true);
        axiosWithAuth()
        .put("https://squallhackathon.herokuapp.com/api/users/user", newUser)
        .then(res => {
            console.log('put res:', res);
            props.setCurrentUser('');
            setLoading(false);
        })
        .catch(err => {
        console.log("SignUp Catch Error: ", err.response.data.message);
        setLoading(false);
        alert(err.response.data.message);
        });
    };


    return (
        <StyledLoader active={loading} spinner text='Loading...'> 
            <div className='accountContainer'>
                <div className='accountCard'>
                    <div className='innerAccountCard'>
                        <h1>Hi, {props.currentUser && props.currentUser.firstname}!</h1>
                        <p>Customize your text alerts here</p>

                        <h3>Turn Texts On or Off</h3>
                        <div>
                            <p style={{width: '181px'}}>Enable Texts</p>
                            <span style={{marginRight: '10px'}}>Off</span>
                            <label className="switch" style={{width:'60px'}}>
                                <input type="checkbox" onClick={handleToggle}/>
                                <span className="slider round"></span>
                            </label>
                            <span style={{marginLeft: '10px'}}>On</span>
                        </div>
                        
                        <h3 style={{marginTop: '0'}}>Choose your Alerts</h3>
                        
                        <label> <input type="radio" name='0' value="option1" onClick={handleClick} checked={isChecked[0]} /> Extreme Cold </label>
                        <label> <input type="radio" name='1' value="option1" onClick={handleClick} checked={isChecked[1]} /> Extreme Hot </label>
                        <label> <input type="radio" name='2' value="option1" onClick={handleClick} checked={isChecked[2]} /> High Winds </label>
                        <label> <input type="radio" name='3' value="option1" onClick={handleClick} checked={isChecked[3]} /> Heavy Rain </label>
                        <label> <input type="radio" name='4' value="option1" onClick={handleClick} checked={isChecked[4]} /> Lightning </label>
                        <label> <input type="radio" name='5' value="option1" onClick={handleClick} checked={isChecked[5]} /> Hail </label>
                        <label> <input type="radio" name='6' value="option1" onClick={handleClick} checked={isChecked[6]} /> Flash Flooding </label>
                        <label> <input type="radio" name='7' value="option1" onClick={handleClick} checked={isChecked[7]} /> Snow Showers </label>
                        <label> <input type="radio" name='8' value="option1" onClick={handleClick} checked={isChecked[8]} /> Blizzard </label>
                        <label style={{margin: '0'}}> <input type="radio" name='9' value="option1" onClick={handleClick} checked={isChecked[9]} /> Tornado </label>
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </StyledLoader>
    )
}
