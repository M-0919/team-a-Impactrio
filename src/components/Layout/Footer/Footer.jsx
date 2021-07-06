import React from "react"
import "./footer.scss"
// import Image from "../../Image"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => {

  const { logo } = useStaticQuery(graphql`
  query {
    logo: file(relativePath: { eq: "beabc_logo.png" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  
  return (
    <footer className="footer bg-custom-lightGray py-5">
      <Container>
        <Row>
          <Col
            lg={{ span: 2, offset: 3 }}
            md={{ span: 3, offset: 2 }}
            xs={{ span: 6 }}
            className="align-self-center"
          >
            <Img
            fixed={logo.childImageSharp.fixed}
            // filename={"logoB.png"} 
            />
          </Col>

          <Col md={{ span: 6, offset: 1 }} xs={{ span: 6 }}>
            {/* <h2 className="footer__menu-title">MENU</h2> */}
            <ul className="footer__menu-list">
              <li className="footer__menu-list__item">
                <Link to="/aboutUs">Sobre nós</Link>
              </li>
              <li className="footer__menu-list__item">
                <Link to="/howItWorks">Eng/Arq</Link>
              </li>
              <li className="footer__menu-list__item">
                <Link to="/successStories">Eventos</Link>
              </li>
              <li className="footer__menu-list__item">
                <Link to="/contactUs">Contato</Link>
              </li>
              <li className="footer__menu-list__item">
                <Link to="/contactUs">Associe-se</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
