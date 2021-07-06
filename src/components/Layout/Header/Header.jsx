import React from "react"
import "./Header.scss"
import Img from "gatsby-image";
// import Image from "../../Image"

import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = ({ path }) => {
// const Header = () => {

  const { logo } = useStaticQuery(graphql`
  query {
    logo: file(relativePath: { eq: "beabc_logo.png" }) {
      childImageSharp {
        fixed(width: 90, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)

  return (
    <header className="header">
      {/* <div className="wrap"> */}
        <Navbar collapseOnSelect expand="lg" className="py-3">
          <Navbar.Brand as={Link} to="/">
            <div className="header__logo">
              <ul>
                <li>              
                  <div className="header__logo__pic">
                    <Img 
                    // filename={"beabc_logo.png"}
                    fixed={logo.childImageSharp.fixed}
                    alt="logo" />
                  </div>
                </li>
                <li>
                  <div className="header__logo__name">
                    <h2>Brazilian Engineers and Architects in BC</h2>
                  </div>
                </li>
              </ul>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link
                as={Link}
                to="/aboutUs"
                eventKey={2}
                className={`header__nav-link ${
                  path === "/aboutUs/" ? "header__nav-link-isActive" : ""
                }`}
              >
                Sobre Nós
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/howItWorks"
                eventKey={2}
                className={`header__nav-link ${
                  path === "/howItWorks/" ? "header__nav-link-isActive" : ""
                }`}
              >
                Eng/Arq
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/successStories"
                eventKey={2}
                className={`header__nav-link ${
                  path === "/successStories/" ? "header__nav-link-isActive" : ""
                }`}
              >
                Eventos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contactUs"
                eventKey={2}
                className={`header__nav-link ${
                  path === "/contactUs/" ? "header__nav-link-isActive" : ""
                }`}
              >
                Contato
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contactUs"
                eventKey={2}
                className={`header__nav-link ${
                  path === "/contactUs/" ? "header__nav-link-isActive" : ""
                }`}
              >
                Associe-se
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      {/* </div> */}
    </header>
  )
}

export default Header
