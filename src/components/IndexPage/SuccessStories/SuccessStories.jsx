import React from "react"
import "./successStories.scss"
import Image from "../../Image"
import { StyledButton } from "../../Elements/Elements"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"

const SuccessStories = () => {
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
    <div className="stories">
      <div className="stories__image">
        <Image filename={"sample1.jpg"} />
      </div>
      <p className="stories__title">Success stories here</p>
      <Link to="/successStories">
        <StyledButton>Link to Success Stories</StyledButton>
      </Link>
    </div>
  )
}

export default SuccessStories
