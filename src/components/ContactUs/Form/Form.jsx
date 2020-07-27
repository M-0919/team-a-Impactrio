import React, { useState } from "react"
import "./form.scss"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { StyledButton } from "../../Elements/Elements"

// import { Link } from "gatsby"

const ContactUs = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    message: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    setData({
      ...data,
      firstName: "",
      lastName: "",
      companyName: "",
      emailAddress: "",
      message: "",
    })
  }

  const handleChange = e => {
    setData({ ...data, [e.currentTarget.id]: e.target.value })
  }

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>*Name</Form.Label>
        <Row>
          <Col>
            <Form.Control
              placeholder="First name"
              required
              size="lg"
              id="firstName"
              onChange={handleChange}
              value={data.firstName || ""}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Last name"
              required
              size="lg"
              id="lastName"
              onChange={handleChange}
              value={data.lastName || ""}
            />
          </Col>
        </Row>
      </Form.Group>
      <Row className="mt-3">
        <Col>
          <Form.Label>*Company</Form.Label>
          <Form.Control
            placeholder="Company name"
            required
            size="lg"
            id="companyName"
            onChange={handleChange}
            value={data.companyName || ""}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form.Label>*Email address</Form.Label>
          <Form.Control
            placeholder="Email address"
            required
            size="lg"
            id="emailAddress"
            onChange={handleChange}
            value={data.emailAddress || ""}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="Message"
            id="message"
            onChange={handleChange}
            value={data.message || ""}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-left">
          <StyledButton type="submit">Submit</StyledButton>
          <p className="text-success">Your infomations was successfully sent</p>
        </Col>
      </Row>
    </form>
  )
}

export default ContactUs
