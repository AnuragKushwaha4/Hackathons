import { useState } from 'react'
import Cards from '../../../DAY4/Props/Components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick=()=>{
    setCount(count+1)
  }

  return (
    <>
      <Cards name="Counter1" count={count} handleClick={handleClick}> 
        <p>This is counter</p>
      </Cards>
      <Cards name="Counter2" count={count} handleClick={handleClick}> 
        <p>This is counter</p>
      </Cards>
      <Cards name="Counter3" count={count} handleClick={handleClick}> 
        <p>This is counter</p>
      </Cards>

    </>
  )
}

export default App
