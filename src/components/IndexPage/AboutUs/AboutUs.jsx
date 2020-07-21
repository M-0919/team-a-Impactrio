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
    <div className="home__about wrap py-5" style={myStyle}>
      <div className="card ml-5" style={{ width: "18rem" }}>
        <div className="card-body">
          <h3 className="card-title">
            Wheel for Change is a platform that connects investors and
            entrepreneurs who drive social change.
          </h3>
          <Link to="/aboutUs" className="btn home__about__button">
            Read more about what we do
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
