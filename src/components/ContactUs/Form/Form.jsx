import React, { useState } from "react"
import "./form.scss"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { StyledButton } from "../../Elements/Elements"
// import { Link } from "gatsby"

const ContactUs = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = e => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    e.preventDefault()
    setValidated(true)
  }
  return (
    <Form
      className="mt-5"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
        <Form.Label>*Name</Form.Label>
        <Row>
          <Col>
            <Form.Control placeholder="First name" required />
            <Form.Control.Feedback type="invalid">
              Please enter your first name.
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Control placeholder="Last name" required />
            <Form.Control.Feedback type="invalid">
              Please enter your last name.
            </Form.Control.Feedback>
          </Col>
        </Row>
      </Form.Group>
      <Row className="mt-3">
        <Col>
          <Form.Label>*Company</Form.Label>
          <Form.Control placeholder="Company name" required />
          <Form.Control.Feedback type="invalid">
            Please enter your company name.
          </Form.Control.Feedback>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form.Label>*Email address</Form.Label>
          <Form.Control placeholder="Email address" required />
          <Form.Control.Feedback type="invalid">
            Please enter your email name.
          </Form.Control.Feedback>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="5" placeholder="Message" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-left">
          <StyledButton type="submit">Submit</StyledButton>
          <Form.Control.Feedback>
            Your infomations was successfully sent
          </Form.Control.Feedback>
        </Col>
      </Row>
    </Form>
  )
}

export default ContactUs
