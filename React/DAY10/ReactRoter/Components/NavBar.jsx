import React from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import "../src/App.css"
const NavBar = () => {
  const navigate = useNavigate()
  const HandleHome =()=>{
    navigate("/")
  }
  const HandleAbout=()=>{
    navigate("/about")
  }
  const HandleDashboard=()=>{
    navigate("/dashboard")
  }
  return (
    // <div>
    //   {/* different ways to create navbar */}

    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    //   <Link to="/dashboard">Dashboard</Link>
    // </div>


    <div>
      {/* Using useNavigate */}
      <button onClick={HandleHome}>Home</button>
      <button onClick={HandleAbout}>About</button>
      <button onClick={HandleDashboard}>Dashboard</button>
    </div>
  )
}

export default NavBar
