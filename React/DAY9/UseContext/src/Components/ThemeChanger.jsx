import React, { useContext } from 'react'
import { userContext } from '../Utilities/ContextProvider'
import "../App.css"


const ThemeChanger = () => {
    const {Theme,setTheme}= useContext(userContext);

    function HandleClick(){
    if(Theme==="light")setTheme("dark");
    else setTheme("light");
}


  return (
    <div id='container' style={{backgroundColor:(Theme==="light")?"white":"black",width:"200px",height:"200px"}}>
      <button onClick={HandleClick}>Change Theme</button>
    </div>
  )
}

export default ThemeChanger
