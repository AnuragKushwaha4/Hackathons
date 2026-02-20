import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      {/* different ways to create navbar */}

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

export default NavBar
