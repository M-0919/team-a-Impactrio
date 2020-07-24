import React from "react"
import "./aboutUs.scss"
import Hero from "./Hero"
import { StyledButton } from "../../Elements/Elements"
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"

const AboutUs = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `)

  // const myStyle = {
  //   background: `url(${Background}) center`,
  //   backgroundSize: "contain",
  //   backgroundRepeat: "no-repeat",
  // }

  return (
    <Hero className="home__about__hero">
      <div className="home__about wrap py-5">
        <div className="home__about__description p-5">
          <h1 className="font-weight-bold">
            Wheel for Change is a platform that connects investors and
            entrepreneurs who drive social change.
          </h1>
          <div className="my-3">
            <StyledButton outline={true}>
              Read more about what we do
            </StyledButton>
          </div>
        </div>
      </div>
    </Hero>
  )
}

export default AboutUs
