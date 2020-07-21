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
      {/* <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/">
            <div className="header__logo">
              <Image filename={"logoA.png"} alt="logo" />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <Link to="/howItWorks">How It Works</Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="/aboutUs">About Us</Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="/successStories">Success Stories</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand as={Link} to="/">
          <div className="header__logo">
            <Image filename={"logoA.png"} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/howItWorks" eventKey={2}>
              How It Works
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutUs" eventKey={2}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/successStories" eventKey={2}>
              Success Stories
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
