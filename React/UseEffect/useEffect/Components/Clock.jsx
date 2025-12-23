import React, { useEffect, useState } from 'react'
import './clock.css'
const Clock = () => {

    const [time,setTime]=useState(new Date().toLocaleTimeString())


    console.log("Hii")
    useEffect(()=>{
        setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
    },1000)
    },[])
  return (
    <div className="clock-container">
  <div className="clock-box">{time.slice(0,2)}</div>
  <div className="clock-box">{time.slice(3,5)}</div>
  <div className="clock-box">{time.slice(6,8)}</div>
  <div className="clock-box">{time.slice(9,11)}</div>
  
</div>

  )
}

export default Clock
