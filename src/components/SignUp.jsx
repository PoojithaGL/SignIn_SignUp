import React from "react";
import "./SignUp.css";
import { NavLink , useNavigate} from "react-router-dom";
import {useState} from "react"
import  supabase  from "./createClient"; 


const SignUp = () => {

const [user, setUser] = useState("");

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const [usernameError,setusernameError] =useState('')

const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

const [message,setMessage] = useState("");

const navigate = useNavigate();

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
  
  
  const usernamePattern =  /^[a-zA-Z]{2,}$/;
    if (!usernamePattern.test(user)) {
      setusernameError(" include only lowercase and uppercase letters.");
      return;
    }
  const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError(" include numbers and lowercase.");
      return;
    }
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%_])[a-zA-Z0-9@#$%_]{6,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError("Password must be at least 6 characters, include uppercase, lowercase, a number, and a special character.");
      return;
    }

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
      navigate('/Welcome');
    }
  } catch (error) {
    console.error("Exception:", error.message);
    setMessage("An unexpected error occurred");
  }
};
  return (
      <div className="min-h-screen w-full  flex items-center justify-center ">
      <div className=" flex-col justify-center item-center h-110 w-90 bg-gray-100 p-3 rounded-xl">
        <div>
         <h1> SignUp</h1>
          <div className="Input">
            <input className='p-3  m-4 rounded-lg bg-gray-200 black w-60'
              type="text"
              placeholder="Name"
              onChange={handleUser}
              value={user}
            />
            <input  className='p-3 mb-4 rounded-lg bg-neutral-200 w-60 text-black'
              type="text"
              autoComplete="off"
              placeholder="Email"
              onChange={handleEmail}
              value={email}
            /> 
            <input  className='p-3 mb-4 rounded-lg bg-gray-200 w-60 text-black'
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              value={password}
            /> <div className="text-red-500">
              {usernameError}{emailError}{passwordError}
              </div>
              <div >
          <input type="button" className="bg-blue-500 text-white hover:text-black hover:bg-blue-100 w-60 h-10 rounded-lg mt-4" value="SignUp "  onClick={handleSignUp} />
          </div>
            
            <br />
            Already have an account ?
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
