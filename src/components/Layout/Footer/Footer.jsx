import React from "react"
import "./footer.scss"
import Image from "../../Image"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
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
    <footer className="footer bg-custom-lightGreen py-5">
      <Container>
        <Row>
          <Col
            lg={{ span: 2, offset: 3 }}
            md={{ span: 3, offset: 2 }}
            xs={{ span: 6 }}
            className="align-self-center"
          >
            <Image filename={"logoB.png"} />
          </Col>

          <Col md={{ span: 6, offset: 1 }} xs={{ span: 6 }}>
            <h2 className="footer__menu-title">MENU</h2>
            <ul className="footer__menu-list">
              <li className="footer__menu-list__item">
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li className="footer__menu-list__item">
                <Link to="/howItWorks">How It Works</Link>
              </li>
              <li className="footer__menu-list__item">
                <Link to="/successStories">Success Stories</Link>
              </li>
              <li className="footer__menu-list__item">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
