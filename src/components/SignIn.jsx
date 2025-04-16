import React, { useState } from "react";
import "./SignIn.css";
import { NavLink } from "react-router-dom";
import  supabase  from "./createClient"; 
const SignIn = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

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
            type="text"
            placeholder="Password"
            onChange={handlePassword}
            value={password}
          />
          <button className="SigninButton" onClick={handleSignIn}>
            SignIn
          </button>
          <br />
          <div>{message}</div>
          Do not have an account ? SignUp
          <br />
          <NavLink to="/SignUp" className="SignUpButton">
            SignUp
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
