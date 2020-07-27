import React from "react"
import Button from "react-bootstrap/Button"
import "./elements.scss"

export const StyledButton = ({ children, outline, type }) => {
  const myButtonStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1.2rem",
  }
  return (
    <Button
      className={`font-weight-bold btn-lg ${
        outline === undefined || outline === false
          ? "btn-custom-orange  text-white"
          : "btn-outline-custom-orange  bg-white text-custom-orange"
      } `}
      style={myButtonStyle}
      type={type ? "submit" : "button"}
    >
      {children}
    </Button>
  )
}

export const StyledSubmitButton = ({
  children,
  outline,
  isLoading,
  handleClick,
}) => {
  const myButtonStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1.2rem",
  }
  return (
    <Button
      className={`font-weight-bold btn-lg ${
        outline === undefined || outline === false
          ? "btn-custom-orange  text-white"
          : "btn-outline-custom-orange  bg-white text-custom-orange"
      } `}
      style={myButtonStyle}
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : children}
    </Button>
  )
}
