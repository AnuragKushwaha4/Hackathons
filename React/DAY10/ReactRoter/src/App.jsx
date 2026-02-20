import Home from "../Components/Home"
import Dashboard from "../Components/Dashboard"
import About from "../Components/About"
import Courses from "../Components/Courses"
import ErrorHandler from "../Components/ErrorHandler.jsx"
import Params from "../Components/Params.jsx"
import NavBar from "../Components/NavBar.jsx"
import Tests from "../Components/Tests.jsx"
import './App.css'


import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },{
      path:"/about",
      element:<About/>
    },{
      path:"/dashboard",
      element:<Dashboard/>,
      children:[
        {
          path:"test",
          element:<Test/>
        },{
          path:"courses",
          element:<Courses/>
        }
      ]
    },{
      path:"*",
      element:<ErrorHandler/>
    }
  ])
  return (
    <>
    <RouterProvider value={router}></RouterProvider>
    <Navbar></Navbar>
    </>
  )
}

export default App
