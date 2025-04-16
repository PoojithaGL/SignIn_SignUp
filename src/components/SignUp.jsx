import React from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import {useState} from "react"
import  supabase  from "./createClient"; 

const SignUp = () => {

const [user, setUser] = useState("");

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const [message,setMessage] = useState("");

const handleUser = (event) => {
  setUser(event.target.value);
};
const handleEmail = (event) => {
  setEmail(event.target.value);
};
const handlePassword = (event) => {
  setPassword(event.target.value);
};

const handleSignUp = async () => {
  if (!user || !email) {
    setMessage("Please fill in both email and password!");
    return;
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      
      email: email,
      password: password,
      options: {
        data: {
          username: user
        }
      }
      
      
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
      <div>
        <div className="SignUpContainer">
          SignUp
          <div className="Input">
            <input
              type="text"
              placeholder="Name"
              onChange={handleUser}
              value={user}
            />
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
            <br />
            <button className="SignupButton" onClick={handleSignUp}>SignUp</button>
            <br />
            Already have an account ? SignIn
            <br />
            <NavLink to="/" className="SignInButton">
              SignIn
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
