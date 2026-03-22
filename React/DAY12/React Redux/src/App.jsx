import { useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment,reset } from './Feactures/Counter/CounterSlice';

function App() {
 
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();


  function handleIncrement(){
    dispatch(increment());
  }
  function handleDecrement(){
    dispatch(decrement());
  }
  function handleReset(){
    dispatch(reset());
  }
  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
