import React, { useEffect, useState } from 'react'
import "../src/App.css"
const Behaviours = () => {
    // const [count,setcount]=useState(0);
    // useEffect(()=>{
    //     alert("Rendered")
    // })


    // const [count,setcount]=useState(0);
    // useEffect(()=>{
    //     alert("Rendered only once")
    // },[])


    // const [count,setcount]=useState(0);
    // useEffect(()=>{
    //     alert("Rendered Depending on count")
    // },[count])


    const [count,setcount]=useState(0);
    useEffect(()=>{
        alert("Rendered Depending on count")

        return ()=>{
            alert("component unmounter")
        }
    },[count])
  return (
    <div>
      {/* First : run at each render
      <p>Count : {count}</p>
      <button onClick={()=>{setcount(count+1)}}>Increment</button> */}


      {/* Second : Run at just first Render
      <p>Count : {count}</p>
      <button onClick={()=>{setcount(count+1)}}>Increment</button> */}


      {/* Third : Run according to dependency similarly worked with multiple dependancy
      <p>Count : {count}</p>
      <button onClick={()=>{setcount(count+1)}}>Increment</button> */}


      {/* along with CleanUP function */}

      <p>Count : {count}</p>
      <button onClick={()=>{setcount(count+1)}}>Increment</button>

    </div>


  )
}

export default Behaviours
