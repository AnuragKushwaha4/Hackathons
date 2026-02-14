import React from 'react'
import "../src/App.css"
const Button = (props) => {
    {/* First If else conditional rendering */}
    // if(props.login){
    //     return <><button onClick={()=>{props.setlogin(false) }}>{"Logout"}</button></>
    // }
    // else{
    //     return<><><button onClick={()=>{props.setlogin(true) }}>{"Login"}</button></></>
    // }




    {/* Second Ternary Rendering */}
//   return (
//     <div>
//         
//       {/* <button onClick={()=>{
//         props.login?props.setlogin(false):props.setlogin(true)
//       }}>{props.login?"Logout":"Login"}</button> */}
//     </div>
//   )





  {/* Logical Rendering */}
//   return<>
//   {props.login && <button onClick={()=>{props.setlogin(false) }}>{"Logout"}</button>}
//   {!props.login && <><button onClick={()=>{props.setlogin(true) }}>{"Login"}</button></>}
// </>




    // {/* Early Rendering */}

    // if(props.login){
    //     return <><button onClick={()=>{props.setlogin(false) }}>{"Logout"}</button></>
    // }
    // return<><><button onClick={()=>{props.setlogin(true) }}>{"Login"}</button></></>





}

export default Button
