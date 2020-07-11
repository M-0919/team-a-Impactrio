import React from "react"
import "./aboutUs.scss"

import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"

import Background from "../../../images/office.jpeg"

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

  const myStyle = {
    background: `url(${Background}) center`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  }

  return (
    // <div className="about">
    //   <div className="about__image">
    //     <Image filename={"sample1.jpg"} alt="sample" />
    //   </div>

    //   <div className="about__svg">
    //     <img src="/sample3.svg" alt="sample3" />
    //   </div>
    //   <h2 className="about__title">AboutUs here</h2>

    //   <Link to="/aboutUs">
    //     <StyledButton>Link to About Us</StyledButton>
    //   </Link>
    // </div>
    <div className="home__about py-5" style={myStyle}>
      <div className="card ml-5" style={{ width: "18rem" }}>
        <div className="card-body">
          <h3 className="card-title">
            Wheel for Change is a platform that connects investors and
            entrepreneurs who drive social change.
          </h3>
          <Link href="/aboutUs" className="btn home__about__button">
            Read more about what we do
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
