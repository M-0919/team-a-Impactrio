import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Youtube = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "youtube_placeholder.png" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.file.childImageSharp.fluid
      return (
        <Img Tag="section" className={className} fluid={imageData}>
          {children}
        </Img>
      )
    }}
  />
)

export default Youtube


