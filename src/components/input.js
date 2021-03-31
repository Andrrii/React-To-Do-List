import React from "react"

const Input = () => {
    const searchText = "Type here to search"
    const searchStyle = {
      fontSize: "20px"
    }
    return (
      <input
        style = {searchStyle}
        placeholder = {searchText} >
      </input>
    )
  }

export default Input