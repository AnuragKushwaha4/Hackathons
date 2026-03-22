import { useState } from 'react'
import './App.css'

function App() {
 
  function handleIncrement(){
    
  }
  function handleDecrement(){

  }
  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <h1>Count</h1>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default App
