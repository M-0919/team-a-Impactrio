import React from "react"
import "./elements.scss"

export const StyledButton = ({ children, outline }) => {
  console.log(outline)
  return (
    <>
      {outline === undefined || outline === false ? (
        <button
          className={`btn btn-custom-orange custom-button font-weight-bold btn-lg text-white`}
        >
          {children}
        </button>
      ) : (
        <button
          className={`btn btn-outline-custom-orange custom-button font-weight-bold btn-lg bg-white text-custom-orange`}
        >
          {children}
        </button>
      )}
    </>
  )
}
