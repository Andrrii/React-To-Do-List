import React from "react"

 const ToDoListItem = ({label,important = false}) => {
    const liStyle = {
        color: important ? "blue" : "black"
    } 
    return (
         <>
            <li style = {liStyle}>{label}</li>
        </>
     )
 }

export default ToDoListItem