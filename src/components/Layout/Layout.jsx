import React from "react"
import "./layout.scss"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div className="layout">
        <div className="container-fluid">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
