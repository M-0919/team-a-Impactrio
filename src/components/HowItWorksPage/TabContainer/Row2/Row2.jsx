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
              lg={4}
              md={12}
              className="text-left d-flex flex-column justify-content-around how-row2__text-box"
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
              <ul className="how-row2__list-2">
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
            <Col
              lg={4}
              md={12}
              className="text-left d-flex align-items-center how-row2__text-box"
            >
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
          <Col lg={6} md={12}>
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
