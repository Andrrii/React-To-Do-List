import React, { Component } from "react"
import "./input.css"

export default class Input extends Component {
  
  state = {
    term : ''
  }

  onSearchChange = (e) => {
    const term = e.target.value
    this.setState({
      term
    })
    this.props.onSearchChange(term)
}

  render () { 
    const searchText = "Type here to search"

      return (
        <input type = "text"
          className = "form-control search-input"
          placeholder = {searchText} 
          onChange = {this.onSearchChange}
          value = {this.state.term}
          >
        </input>
      )
  }
  
}
