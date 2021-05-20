import * as React from "react"



// markup
const Button = ({titleName, onChildClick}) => {
    // let handelClick = (e) => {
    //     onChildClick(e.target.innerHTML)
    // }
  return (
      <button style={{width: "100px", height: "100px", backgroundColor: "lightblue", fontSize: "20px"}}
        onClick={(e) => onChildClick(e.target.innerHTML)}
      
      >{titleName}</button>
  )
}



export default Button
