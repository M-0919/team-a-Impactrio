import React, { useState } from "react"
import "./form.scss"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import postRequest from "../../../lib/postRequest"
import dataFormatter from "../../../lib/dataFormatter"

import { StyledSubmitButton } from "../../Elements/Elements"

// import { Link } from "gatsby"

const ContactUs = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    // companyName: "",
    emailAddress: "",
    message: "",
  })
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [boolean, setBoolean] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    setIsLoading(true)
    const res = await postRequest(
      "/.netlify/functions/post",
      dataFormatter(data)
    ).then(res => res)

    if (res.fetch) {
      setData({
        ...data,
        firstName: "",
        lastName: "",
        companyName: "",
        emailAddress: "",
        message: "",
      })
      setBoolean(true)
      setIsLoading(false)
      setMessage("Mensagem enviada com sucesso.")
    } else if (!res.fetch) {
      setBoolean(false)
      setIsLoading(false)
      setMessage(res.message)
    }
  }

  const handleChange = e => {
    setData({ ...data, [e.currentTarget.id]: e.target.value })
  }

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>*Nome</Form.Label>
        <Row>
          <Col>
            <Form.Control
              placeholder="Nome"
              required
              size="lg"
              id="firstName"
              onChange={handleChange}
              value={data.firstName || ""}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Sobrenome"
              required
              size="lg"
              id="lastName"
              onChange={handleChange}
              value={data.lastName || ""}
            />
          </Col>
        </Row>
      </Form.Group>
      {/* <Row className="mt-3">
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
      </Row> */}
      <Row className="mt-3">
        <Col>
          <Form.Label>*Email</Form.Label>
          <Form.Control
            placeholder="Endereço de email"
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
          <Form.Label>Messagem</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="Messagem"
            id="message"
            onChange={handleChange}
            value={data.message || ""}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-left">
          <StyledSubmitButton isLoading={isLoading} handleClick={handleSubmit}>
            Enviar
          </StyledSubmitButton>
          <p className={`${boolean ? "text-success" : "text-danger"}`}>
            {message}
          </p>
        </Col>
      </Row>
    </form>
  )
}

export default ContactUs
