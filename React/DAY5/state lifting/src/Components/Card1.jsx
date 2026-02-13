import React from 'react'
import "../App.css"
const Card1 = (props) => {
  return (
    <div>
      <button onClick={()=>{props.setCount(-1)}}>Cloud Computing</button>
      {props.count==-1 && (
        <p>Cloud Computing is one of the most transformative technologies of the 21st century.
             It enables individuals and organizations to access computing resources—such as servers,
              storage, databases, networking, and software—over the internet instead of
               relying on local machines or physical infrastructure. Today, cloud computing
                powers everything from startups and mobile
             apps to artificial intelligence systems and global enterprises.</p>
      )}
    </div>
  )
}

export default Card1
