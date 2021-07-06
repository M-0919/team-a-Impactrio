import React from "react"
import "./layout.scss"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ children, path }) => {

  return (
    <>
      <div className="layout">
        <div>
          <Header path={path} />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
