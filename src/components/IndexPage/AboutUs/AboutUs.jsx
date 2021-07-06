import React from "react"
import "./aboutUs.scss"
import Hero from "./Hero"
// import { Link } from "gatsby"
// import { StyledButton } from "../../Elements/Elements"

const AboutUs = () => {
  return (
    <Hero className="home__about__hero">
      <div className="home__about wrap py-5">
        <div className="home__about__description p-5">
            <h1 className="font-weight-bold">
              Organização de Brasileiros Engenheiros e Arquitetos que residem em British Columbia - Canadá.
            </h1>
          <div className="my-3">
            {/* <Link to="aboutUs">
              <StyledButton outline={true}>
                Read more about what we do
              </StyledButton>
            </Link> */}
          </div>
        </div>
      </div>
    </Hero>
  )
}

export default AboutUs
