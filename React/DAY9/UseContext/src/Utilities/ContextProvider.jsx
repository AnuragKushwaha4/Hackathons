import React, { createContext, useState } from 'react'
import App from "../App.jsx"



const userContext = createContext();


const ContextProvider = ({children}) => {
  const [Theme,setTheme]= useState("light");
  return (
    <userContext.Provider value={{Theme,setTheme}}>
        {children}
    </userContext.Provider>
  )
}

export default ContextProvider
export {userContext}
