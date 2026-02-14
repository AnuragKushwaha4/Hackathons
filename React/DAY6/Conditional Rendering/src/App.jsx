import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '../Component/Button'

function App() {
  const [login, setlogin] = useState(false)

  return (
    <>
    <Button login={login} setlogin={setlogin}></Button>
    
    
    </>
  )
}

export default App
