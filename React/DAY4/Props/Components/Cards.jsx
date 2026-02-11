import React from 'react'

const Cards = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.children}</p>

        <h1>{props.count}</h1>
      <button onClick={props.handleClick}>Click me</button>

    </div>
  )
}

export default Cards
