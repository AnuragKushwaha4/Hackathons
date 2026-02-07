import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCart from './Components/UserCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cart-container'> 
       <UserCart fullname="Anurag Kushwaha" discription="I am Computer Science Student" />
       <UserCart fullname={"Aditya Kushwaha"} discription={"I am School student"}/>
       <UserCart fullname={"Aditya Kushwaha"} discription={"I am School student"}/>
       <UserCart fullname={"Aditya Kushwaha"} discription={"I am School student"}/>
       <UserCart fullname={"Aditya Kushwaha"} discription={"I am School student"}/>
       <UserCart fullname={"Aditya Kushwaha"} discription={"I am School student"}/>
       <UserCart fullname={"Aditya Kushwaha"} discription={"I am School student"}/>
      </div>
    </>
  )
}

export default App
