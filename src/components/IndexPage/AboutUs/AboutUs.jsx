import React from "react"
import "./aboutUs.scss"
import Image from "../../Image"
import { StyledButton } from "../../Elements/Elements"
import { Link } from "gatsby"
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

  return (
    <div className="about">
      <div className="about__image">
        <Image filename={"sample1.jpg"} alt="sample" />
      </div>

      <div className="about__svg">
        <img src="/sample3.svg" alt="sample3" />
      </div>
      <h2 className="about__title">AboutUs here</h2>

      <Link to="/aboutUs">
        <StyledButton>Link to About Us</StyledButton>
      </Link>
    </div>
  )
}

export default AboutUs
