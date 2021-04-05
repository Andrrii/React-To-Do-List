import React, { Component } from "react"
import ToDoList from "../todo-list" 
import AppHeader from "../app-header"
import Input from "../input"
import ItemStatusFilter from "../item-status-filter"
import ItemAddForm from "../item-add-form"
import "./app.css"

export default class App extends Component {

  maxId = 100
  state = {
    isLoggedIn :  false,
    todoData : [
      this.createToolItem("Drink coffee"),
      this.createToolItem("Learn React"),
      this.createToolItem("Learn Redux"),
    ],
    term:'',
    filter : 'all' // active/done/all
  }

  createToolItem(label) {
   return {
      id:this.maxId++,
      label:label,
      important:false,
      done:false
  }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      // delete
      const before = todoData.slice(0,idx)
      const after = todoData.slice(idx+1) 
      const newArray = [...before,...after]
      return {
        todoData: newArray
      }
    })
    
  }

  addItem = (text) => {
    // generate id?

    // add element to array

   const newItem = this.createToolItem(text)

    this.setState(({todoData}) => {
      const newArray = [
        ...todoData,
        newItem
      ]
      return {
        todoData:newArray
      }
    })
  }
  
  toggleItem (id,propName){
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      // update item
      const oldItem = todoData[idx]
      const newItem = {...oldItem,[propName]: !oldItem[propName]}

      // construct new array
      const newArray = [
        ...todoData.slice(0,idx),
        newItem,
        ...todoData.slice(idx+1)
      ]
      return {
        todoData:newArray
      }

    })
  }

  onToggleDone = (id) => {
    this.toggleItem(id,"done")
  }   
  
  onToggleImportant = (id) => {
   this.toggleItem(id,"important")
  }

  search = (items,term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label
             .toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  onSearchChange = (term) => {
    this.setState(
      {term}
    )
  }


  filter = (items,filter) => {
      switch(filter) {
        case "all" :
          return items
        case "active":
          return items.filter((item) => !item.done)
        case "done" :
          return items.filter((item) => item.done)
        default:
          return items
      }
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }
  render() {
    // Можна робмти так
     

      const {isLoggedIn,todoData,term,filter} = this.state,
            visibleItems = this.filter(this.search(todoData,term),filter),
            loginBox = <h3>Log in Please!</h3>,
            welocomeBox = <h3>Welocome Back!</h3>,
            doneCount = todoData.filter((el) => el.done).length,
            todoCount = todoData.length - doneCount
      return (
      <div className="todo-app">  
        {isLoggedIn ? welocomeBox : loginBox} {/* Only React Elements */}
        <span>{ (new Date()).toString() }</span>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <Input 
            onSearchChange = {this.onSearchChange}
          />
          <ItemStatusFilter 
            filter = {filter}
            onFilterChange = {this.onFilterChange}
          />
        </div>
        <ToDoList todos = {visibleItems}
                  /* id отримуєм з itemlist  */
                  onDeleted = {this.deleteItem}
                  onToggleImportant = {this.onToggleImportant}
                  onToggleDone = {this.onToggleDone}
                  />
        <ItemAddForm addItem = {this.addItem} />
      </div>
      )
    }
  }
