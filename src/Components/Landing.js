import React from 'react'

export default function Landing() {



    const handleSubmit = () => {

    }


    return (
        <div className='landingContainer'>
            <div className='landingWeather'>
                <div className='landingWeatherInner'> 
                    <h2>Weather can change in an instant.</h2>
                    <p>Squall sends residents of Boulder, CO a text every time there’s a sudden and unforeseen weather event.</p>
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
                    <h2>Our Service for Boulderites</h2>
                    <p>The weather in Boulder, CO is unpredictable. You might have started the day in short sleeves, 
                        but as the day goes on the temperature drops and now it's hailing. Sudden weather changes are 
                        uncomfortable when you’re not ready for them. With Squall, we send you text notifications when 
                        there’s an incoming weather event so that you can make a plan.
                    </p>
                </div>
            </div>
            <div className='landingGetStarted'>
                <div className='landingGSInnerDiv'>
                    <h2>Get Started</h2>
                    <p>Enter your information to sign up for alerts</p>
                    <input className='landingInputHalf' type='Text' required placeholder='First Name'/>
                    <input className='landingInputHalf' type='Text' required placeholder='Last Name'/>
                    <input className='landingInputFull' type='email' required placeholder='Email'/>
                    <input className='landingInputHalf' type='Text' required placeholder='Phone (Ex. 123456789)'/>
                    <select className='landingInputHalf' required>
                        <option value="none" selected disabled hidden> Select Your City </option> 
                        <option value="Seattle">Seattle</option>
                        <option value="Boulder">Boulder</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Texas">Texas</option>
                    </select>
                    <input className='landingInputFull' type='password' required placeholder='Password'/>
                    <input className='landingInputFull' type='password' required placeholder='Confirm Password'/>
                    <button onClick={handleSubmit}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
