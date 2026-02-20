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
      element:<>
      <NavBar/>
      <Home/>
      </>
    },{
      path:"/about",
      element:<>
      <NavBar/>
      <About/>
      </>
    },{
      path:"/dashboard",
      element:<>
      <NavBar/>
      <Dashboard/>
      </>,
      children:[
        {
          path:"test",
          element:<Tests/>
        },{
          path:"courses",
          element:<Courses/>
        }
      ]
    },{
      path:"*",
      element:<>
      <ErrorHandler/>
      </>
    },
    {
      path:"/student/:id",
      element:<>
      <Params/></>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    
    </>
  )
}

export default App
