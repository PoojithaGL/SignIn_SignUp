import { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
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
