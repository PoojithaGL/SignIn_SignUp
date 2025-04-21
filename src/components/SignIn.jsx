import React, { useState } from "react";
import "./SignIn.css";
import { NavLink, useNavigate } from "react-router-dom";
import  supabase  from "./createClient"; 
const SignIn = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");


 

  const navigate = useNavigate()

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };


  const handleSignIn = async () => {
         

    if (!password || !email) {
      setMessage("Please fill in both email and password!");
      return;
    }
    
    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError(" include numbers, lowercase.");
      return;
    }
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%_])[A-Za-z0-9@#$%]{4,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError("Password must be at least 4 characters, include uppercase, lowercase, a number, and a special character.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
     
        email: email,
        password:password
        
      });

      if (error) {
        console.error("Error signing in:", error.message);
        setMessage(error.message);
      } else {
        console.log("Signed in successfully:", data);
        setMessage("Sign in successful!");
        navigate('/Welcome')
      }
    } catch (error) {
      console.error("Exception:", error.message);
      setMessage("An unexpected error occurred");
    }
  };

 

  return (
    <div>
      <div className="SignInContainer">
        SignIn
        <div className="Inputs">
          <input
            type="text"
            placeholder="Email"
            onChange={handleEmail}
            value={email}
          />
        
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
            value={password}
          />  {emailError}
          {passwordError}
          <div>{message}</div>
          <button className="SigninButton" onClick={handleSignIn} >
            SignIn
          </button>
          <br />
          Do not have an account ?
          <br />
          <NavLink to="/SignUp" className="SignUpButton"  >
            SignUp 
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
