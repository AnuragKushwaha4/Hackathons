import React from 'react'
import "../App.css"
const Child = React.memo(
    (props) => {
  return (
    <div>
      <button>{props.name}</button>
    </div>
  )
}

)
export default Child
