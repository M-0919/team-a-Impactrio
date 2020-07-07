import React from "react"
import "../../styles/reset.css"
import "../../styles/global.scss"
import SEO from "../seo"
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
      <SEO title="home" />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
