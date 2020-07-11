import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "../../../Image"
import "./row2.scss"
export const Row2 = ({ object }) => {
  return (
    <div className="how-row2 pt-5">
      <Container>
        <Row className="justify-content-md-center">
          {object.title2 ? (
            <Col
              sm={4}
              className="text-left d-flex flex-column justify-content-around"
            >
              <ul>
                <li>
                  <h2 className="text-custom-text font-weight-bold ">
                    {object.title1}
                  </h2>
                  <p className="pt-3 how-row1__description">
                    {object.discription1}
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <h2 className="text-custom-text font-weight-bold ">
                    {object.title2}
                  </h2>
                  <p className="pt-3 how-row1__description">
                    {object.discription2}
                  </p>
                </li>
              </ul>
            </Col>
          ) : (
            <Col sm={4} className="text-left d-flex align-items-center">
              <div>
                <h2 className="text-custom-text font-weight-bold ">
                  {object.title}
                </h2>
                <p className="pt-3 how-row2__description">
                  {object.discription}
                </p>
              </div>
            </Col>
          )}

          <Col sm="auto" />
          <Col sm={6}>
            <div className="how-row2__image">
              <Image filename={object.image} alt="collaborate" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Row2
