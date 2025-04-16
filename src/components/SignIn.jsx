import React from 'react'
import './SignIn.css'
import { NavLink } from 'react-router-dom'

const SignIn = () => {
  return (
    <div>
      <div className='SignInContainer'>SignIn 
        <div className='Inputs'>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Email'/>
        <button className='SigninButton'>SignIn</button><br/>
        Do not have an account ? SignUp<br/>
        <NavLink to = "/SignUp" className='SignUpButton'>SignUp</NavLink>
        </div>

      </div>
    </div>
  )
}

export default SignIn
