import React from "react"
import "./contactUs.scss"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Form from "./Form/Form"
import CompanyInfo from "./CompanyInfo/CompanyInfo"

// import { StyledButton } from "../Elements/Elements"
// import { Link } from "gatsby"

const ContactUs = () => {
  return (
    <div className="contactUs wrap my-5">
      <h1 className="contactUs__title">Contact Us</h1>
      <Container>
        <Row>
          <Col className="align-self-center">
            <Form />
          </Col>

          <Col>
            <CompanyInfo />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactUs
