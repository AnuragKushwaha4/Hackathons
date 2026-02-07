import React from 'react'
import "./UserCart.css"
const UserCart = ({fullname,discription}) => {
  return (
    <div className='container'>
      <h1>{fullname}</h1>
      <img src="https://imgs.search.brave.com/39_N9VGnc8-jheI6EIsOEAqA8N5Mv3laITaccxHJVg8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8x/MS8yMS8xNy8wMi9s/aW9uLTY2ODk4XzY0/MC5qcGc" alt="" />
      <p>{discription}</p>
    </div>
  )
}

export default UserCart
