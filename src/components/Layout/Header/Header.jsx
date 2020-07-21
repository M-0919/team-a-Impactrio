import React from "react"
import "./Header.scss"
import Image from "../../Image"
import { Link } from "gatsby"
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
    <header className="header bg-light">
      {/* <div className="header__logo">
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
      </ul> */}
      {/* <h2 className="header__title">Header here</h2> */}
      <nav className="navbar navbar-expand-lg navbar-light wrap">
        <Link to="/">
          <div className="header__logo">
            <Image filename={"logoA.png"} alt="logo" />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link className="nav-item nav-link m-2" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link m-2" to="/aboutUs">
              About Us
            </Link>
            <Link className="nav-item nav-link m-2" to="/howItWorks">
              How It Works
            </Link>
            <Link className="nav-item nav-link m-2" to="/successStories">
              Success Stories
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
