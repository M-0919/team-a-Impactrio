import React from "react"
import "./howItWorks.scss"
import Image from "../../Image"
import { howItWorks } from "../../../../website/index"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StyledButton } from "../../Elements/Elements"

const HowItWorks = () => {
  return (
    <div className="home__how py-5 wrap">
      <Container className="home__how__container">
        <Row className="justify-content-around">
          {howItWorks.map((item, index) => {
            const { title, description, icon } = item
            return (
              <Col key={index} md={3} className="home__how__column">
                <div className="home__how__column__image">
                  <Image filename={icon} />
                </div>
                <div className="home__how__column__description">
                  <h2 className="home__how__column__title mt-5">{title}</h2>
                  <p className="home__how__column__text">{description}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>

      <div className="text-center pt-5 pb-3">
        <Link to="/howItWorks">
          <StyledButton outline={true}>How It Works</StyledButton>
        </Link>
      </div>
    </div>
  )
}

export default HowItWorks
