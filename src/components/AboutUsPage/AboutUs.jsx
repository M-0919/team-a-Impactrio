import React from "react"
import "./aboutUs.scss"
// import Image from "../Image"
// import { StyledButton } from "../Elements/Elements"
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

  return (
    <div className="about">
      {/* <div className="about__image">
        <Image filename={"sample1.jpg"} alt="sample" />
      </div>

      <div className="about__svg">
        <img src="/sample3.svg" alt="sample3" />
      </div> */}
      <h2 className="about__title">About Us</h2>
      <p className="about__text">
        This is a platform that connects investors and entrepreneurs who drive
        social change. Our web application incorporates a framework, called
        Wheel for Change, which measures the social impact of your projects and
        helps you connect with potential investors.
      </p>
      <p className="about__text">
        Wheel for Change acts as a mentor who unlocks someone’s entrepreneurial
        and impact potential; a facilitator who finds common objectives among
        investors and entrepreneurs; an innovator who wants to create an impact
        in the community; and a communicator who conveys ideas clearly and
        simply.
      </p>
      <h2 className="about__title">What We Do</h2>
      <p className="about__text">
        We help people who are making societal changes through innovation. We
        give enterprises the opportunity to grow their concepts into drivers of
        change that benefits society and the environment.
      </p>

      {/* <Link to="/aboutUs">
        <StyledButton>Link to About Us</StyledButton>
      </Link> */}
    </div>
  )
}

export default AboutUs
