import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [val,setValue]=useState("")
  const handlechange=(e)=>{
    setValue(e.target.value.toUpperCase())
  }

  const handlesubmit =(e)=>{
    e.preventDefault();
    alert(`The submitted name is: ${val}`)
  }
  return (
    <>
    {/* first we understand the working in form */}
    <form onSubmit={handlesubmit}>
      <input type="text" value={val} onChange={handlechange} />
      <button type='submit' >Submit</button>
    </form>
    </>
  )
}

export default App
