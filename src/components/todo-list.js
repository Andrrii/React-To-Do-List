import React from "react"
import ToDoListItem from "./todo-list-item"

const ToDoList = ({todos}) => {
    // Перебір масиву об'єктів
    const elements = todos.map(item => {
        return (
            <ToDoListItem 
                key = {item.label}
                label = {item.label} 
                important = {item.important}
            />
        )
    })   

    return (
      <ul>
          {elements}
      </ul>
    )
    
    
}

export default ToDoList