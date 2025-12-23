import { useState } from 'react';
import './App.css'
  
function App() {
const [users,setUser]=useState([]);
   async function github(){
    const response = await fetch("https://api.github.com/users");

    const data = response.json();
    console.log(data);
    setUser(data);
  }

  github();
  return (
    <>
      <h1>GITHUB</h1>


    </>
  )
}

export default App
