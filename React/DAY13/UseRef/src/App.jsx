import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Timer, setTimer] = useState(0)
  let starter=useRef(null);
  function starttimer(){
   starter.current = setInterval(() => {
      setTimer(Timer=>Timer+1)
    }, 1000);
  }

  function stoptimer(){
    clearInterval(starter.current);
    starter.current=null;
  }

  function resettimer(){
    setTimer(0);
    starter.current=null;
  }
  return (
    <>
    <h1>Seconds : {Timer}</h1>
    <br />
    <button onClick={starttimer}>Start</button>
    <br />
    <button onClick={stoptimer}>Stop</button>
    <br />
    <button onClick={resettimer}>Reset</button>
    </>
  )
}

export default App
