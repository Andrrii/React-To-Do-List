import React from "react"
import ToDoList from "../todo-list" 
import AppHeader from "../app-header"
import Input from "../input"
import ItemStatusFilter from "../item-status-filter"
import "./app.css"

const App = () => {
    // Можна робмти так
    const isLoggedIn = false

    const todoData = [
        { label : "Drink coffee",important:false },
        { label : "Learn React",important:false },
        { label : "Learn Redux",important:true }
    ]

    const loginBox = <h3>Log in Please!</h3>
    const welocomeBox = <h3>Welocome Back!</h3>
    
    return (
    <div className="todo-app">
      {isLoggedIn ? welocomeBox : loginBox} {/* Only React Elements */}
      <span>{ (new Date()).toString() }</span>
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <Input />
        <ItemStatusFilter />
      </div>
      <ToDoList todos = {todoData}/>
    </div>
    )
  }

export default App