import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import { StyledButton } from "../../Elements/Elements"
import "./subscribe.scss"

// import { useStaticQuery, graphql } from "gatsby"

const Subscribe = () => {
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
    <div className="home__subscribe py-5 bg-custom-lightOrange">
      <div className="wrap">
        <Container className="home__subscribe__wrap">
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="home__subscribe__text">
                Subscribe to our monthly newsletter and stay up to date with all
                news and updates.
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="d-flex home__subscribe__container">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  className="home__subscribe__form mr-3"
                />
                <StyledButton>Read more</StyledButton>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Subscribe
