import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "aboutUs_banner2.jpg" }) {
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

// export const ImpactStats = () => {
//   const data = useStaticQuery(graphql`
//     {
//       contentfulImpactStats {
//         title
//         socialEntrepreneursMobilized
//         businessesFunded
//         impactInvestors
//         totalFundsCollected
//       }
//     }
//   `)

//   return data
// }
