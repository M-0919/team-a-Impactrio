import React from "react"
import "./Header.scss"
import Image from "../../Image"
import { Link } from "gatsby"
import { StyledButton } from "../../Elements/Elements"
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
      <ul>
        <li>
          <Link to="/aboutUs">
            <StyledButton>About Us</StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/howItWorks">
            <StyledButton>How It Works</StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/successStories">
            <StyledButton>Success Stories</StyledButton>
          </Link>
        </li>
      </ul>
      <h2 className="header__title">Header here</h2>
    </header>
  )
}

export default Header
