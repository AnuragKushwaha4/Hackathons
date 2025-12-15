import React from 'react'

const App = () => {
    let count = 0;
    function handleClick(){
      let h1 = document.querySelector('h1')
        count = count+1;
        h1.textContent = `Counter: ${count}`
    }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>Increatment..</button>
    </div>
  )
}

export default App
