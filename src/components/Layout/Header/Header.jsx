import React from "react"
import "./Header.scss"
import Image from "../../Image"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = ({ path }) => {
  return (
    <header className="header wrap">
      <Navbar collapseOnSelect expand="lg" className="py-3">
        <Navbar.Brand as={Link} to="/">
          <div className="header__logo">
            <Image filename={"logoA.png"} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/howItWorks"
              eventKey={2}
              className={`header__nav-link ${
                path === "/howItWorks/" ? "header__nav-link-isActive" : ""
              }`}
            >
              How It Works
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/aboutUs"
              eventKey={2}
              className={`header__nav-link ${
                path === "/aboutUs/" ? "header__nav-link-isActive" : ""
              }`}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/successStories"
              eventKey={2}
              className={`header__nav-link ${
                path === "/successStories/" ? "header__nav-link-isActive" : ""
              }`}
            >
              Success Stories
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
