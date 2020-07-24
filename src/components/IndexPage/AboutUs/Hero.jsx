import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "office.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.file.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default Hero
