import React from 'react'
import'./SignUp.css'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
        <div>
      <div className='SignUpContainer'>SignUp
        <div className='Input'>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Email'/>
        <input type='text' placeholder='Password'/>
        <br/>
        <button className='SignupButton'>SignUp</button><br/>
        Already have an account ? SignIn<br/>
        <NavLink to = "/" className='SignInButton'>SignIn</NavLink>
        </div>

      </div>
    </div>
    </div>
  )
}

export default SignUp
