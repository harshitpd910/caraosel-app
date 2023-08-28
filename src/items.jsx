import React from 'react'
import Dog from "./images/dog2.jpeg"

const Items = ({tile}) => {
   



  


  return (
   <>
   <div className="carausel-items">
    <div></div>
    <div className="carausel-img">{tile.icons}</div>
    <div className="carausel-image-text">{tile.description}</div>


   </div>
   
   </>
  )
}

export default Items