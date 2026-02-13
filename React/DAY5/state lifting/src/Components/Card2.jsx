import React from 'react'
import "../App.css"
const Card2 = (props) => {
  return (
    <div>
        <button onClick={()=>{props.setCount(1)}}>Generative AI</button>
        {(props.count==1 && (<p>Generative Artificial Intelligence (Gen AI) is one of the most powerful
             advancements in modern technology. Unlike traditional AI systems that analyze or 
             classify data, Generative AI can create new content such as text, images, music, code, 
             and even videos. It has rapidly transformed industries and is becoming a core skill for
             future engineers, especially in fields like AI/ML and software development.</p>))}

        
    </div>
  )
}

export default Card2
