import React from "react"
import Button from "react-bootstrap/Button"
import "./elements.scss"

export const StyledButton = ({ children, outline }) => {
  const myButtonStyle = {
    padding: "1rem",
  }
  return (
    <Button
      className={`font-weight-bold btn-lg ${
        outline === undefined || outline === false
          ? "btn-custom-orange  text-white"
          : "btn-outline-custom-orange  bg-white text-custom-orange"
      } `}
      style={myButtonStyle}
    >
      {children}
    </Button>
  )
}
