import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './Components/Card1.jsx'
import Card2 from './Components/Card2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Cloud Computing vs Generative AI</h1>
    <Card1 count={count} setCount={setCount}></Card1>
    <br />
    <Card2 count={count} setCount={setCount}></Card2>
    </>
  )
}

export default App
