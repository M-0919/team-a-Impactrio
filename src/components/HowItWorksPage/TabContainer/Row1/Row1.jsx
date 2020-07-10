import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "../../../Image"
import "./row1.scss"
export const Row1 = ({ object }) => {
  return (
    <div className="how-row1">
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={6} className="bg-custom-green">
            <Image filename={object.image} alt="collaborate" />
          </Col>
          <Col sm="auto"></Col>
          <Col sm={4} className="bg-white ">
            sm=4
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Row1
