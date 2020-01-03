import React from 'react'

export default function Login() {
    return (
        <div className='loginContainer'>
            <div className='loginContainerInner'>
                <h2>Welcome Back!</h2>
                <h3> Login to access your dashboard and customize your alerts.</h3>
                <input className='landingInputFull' type='Text' required placeholder='Email'/>
                <input className='landingInputFull' type='Text' required placeholder='Password'/>
                <a href='#'>Forgot your password?</a>
                <button>Enter</button>
            </div>
        </div>
    )
}
