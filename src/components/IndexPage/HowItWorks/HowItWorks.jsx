import React from "react"
import "./howItWorks.scss"
import Image from "../../Image"
import { Link } from "gatsby"
import { StyledButton } from "../../Elements/Elements"
// import { useStaticQuery, graphql } from "gatsby"

const HowItWorks = () => {
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
    <div className="how">
      <div className="how__image">
        <Image filename={"sample2.jpg"} alt="sample" />
      </div>
      <p className="how__title">How It Works here</p>
      <Link to="/howItWorks">
        <StyledButton>Link to How It Works</StyledButton>
      </Link>
    </div>
  )
}

export default HowItWorks
