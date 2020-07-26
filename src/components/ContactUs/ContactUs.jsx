import React from "react"
import "./contactUs.scss"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

// import { StyledButton } from "../Elements/Elements"
// import { Link } from "gatsby"

const ContactUs = () => {
  return (
    <div className="contactUs wrap my-5">
      <h1 className="contactUs__title">Contact Us</h1>
      <Container className="w-50 my-0 mx-auto ">
        <Form className="mt-5">
          <Row>
            <Col>
              <Form.Control placeholder="First name" required />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" required />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Form.Control placeholder="Email address" required />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Form.Control as="textarea" rows="3" placeholder="Message" />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default ContactUs
