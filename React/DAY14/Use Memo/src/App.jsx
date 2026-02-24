import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input,setinput] = useState(0);
 
  let doubleValue = useMemo(()=>{
    console.log("Expensive function")
    for(let i=0;i<=100000000;i++){};
    return Number(input)*2;
  },[input])


  return (
    <>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <br />
      {doubleValue}
      <br />
      <input type="number"
      value={input} onChange={(e)=>{setinput(e.target.value)}} />
    </>
  )
}

export default App
