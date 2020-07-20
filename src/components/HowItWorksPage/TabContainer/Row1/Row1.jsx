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
          <Col lg={6} md={12}>
            <div className="how-row1__image">
              <Image filename={object.image} alt="collaborate" />
            </div>
          </Col>
          <Col sm="auto" />
          <Col
            lg={4}
            md={12}
            className="text-left d-flex align-items-center how-row1__text-box"
          >
            <div>
              <h2 className="text-custom-text font-weight-bold ">
                {object.title}
              </h2>
              <p className="pt-3 how-row1__description">{object.discription}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Row1
