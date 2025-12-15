import React, { useState } from 'react'

const App = () => {
    const [count,setCount] = useState(0);
    function handleClick(){
      setCount(count+1);
    }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>Increatment..</button>
    </div>
  )
}

export default App
