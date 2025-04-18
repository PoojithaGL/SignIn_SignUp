import { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
   
        <SignIn />
      </div>
    ),
  },
  {
    path: "/SignUp",
    element: (
      <div>
       
        <SignUp />
      </div>
    ),
  },
  {
    path: "/Welcome",
    element: (
      <div>
       
       <Welcome/>
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
       
      </div>
    </>
  );
}

export default App;
