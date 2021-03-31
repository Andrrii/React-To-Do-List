import React from "react"
import ToDoList from "./todo-list" 
import AppHeader from "./app-header"
import Input from "./input"


const App = () => {
    // Можна робмти так
    const isLoggedIn = false

    const todoData = [
        { label : "Drink coffee",important:false },
        { label : "Drink React",important:false },
        { label : "Drink Redux",important:true }
    ]

    const loginBox = <h3>Log in Please!</h3>
    const welocomeBox = <h3>Welocome Back!</h3>
    return (
    <div>
      {isLoggedIn ? welocomeBox : loginBox} {/* Only React Elements */}
      <span>{ (new Date()).toString() }</span>
      <AppHeader/>
      <Input/>
      <ToDoList todos = {todoData}/>
    </div>
    )
  }

export default App