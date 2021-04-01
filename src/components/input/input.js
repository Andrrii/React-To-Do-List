import React from "react"
import "./input.css"

const Input = () => {
    const searchText = "Type here to search"

    return (
      <input type = "text"
        className = "form-control search-input"
        placeholder = {searchText} >
      </input>
    )
  }

export default Input