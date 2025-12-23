import { useEffect, useState } from 'react';
import './App.css'
  
function App() {
const [users,setUser]=useState([]);
// render at every update of count:
const [count,setCount]=useState(30);
   useEffect(()=>{
    async function github(){
    const response = await fetch(`https://api.github.com/users?per_page=${count}`);

    const data = await response.json();
    console.log(data);
    setUser(data);
  }

    github();
   },[count])

// this will render only one time : dependency array is null:
  //  useEffect(()=>{
  //   async function github(){
  //   const response = await fetch(`https://api.github.com/users?per_page=${count}`);

  //   const data = await response.json();
  //   console.log(data);
  //   setUser(data);
  // }

  //   github();
  //  },[])

  return (
    <>
      <h1>GITHUB</h1>
     <input type="number" value={count} onChange={(e)=>{setCount(e.target.value)}} />

      {
        users.map(user=>(
          <img src={user.avatar_url} alt="" height={"100px"} width={"100px"} key={user.login}/>
        ))
      }

    </>
  )
}

export default App
