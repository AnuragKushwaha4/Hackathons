import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Components/Child'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = useCallback(()=>{
    setCount(count+1)
  },[count])
  return (
    <>
      <div>{count}</div>
      <div><button onClick={handleIncrement}>Increment</button></div>

      <Child name="Child Button"  setCount={setCount}/>
    </>
  )
}

export default App
