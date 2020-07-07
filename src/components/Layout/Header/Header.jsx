import React from "react"
import "./Header.scss"
import Image from "../../Image"
// import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
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
    <header className="header">
      <div className="header__logo">
        <Image filename={"logoA.png"} alt="logo" />
      </div>
      <h2 className="header__title">Header here</h2>
    </header>
  )
}

export default Header
