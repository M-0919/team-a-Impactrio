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
    <div className="home__stories py-5">
      {/* <div className="stories__image">
        <Image filename={"sample1.jpg"} />
      </div>
      <p className="stories__title">Success stories here</p>
      <Link to="/successStories">
        <StyledButton>Link to Success Stories</StyledButton>
      </Link> */}
      <h2 className="text-center">
        We help you find the right social investments.
      </h2>

      <div className="d-flex justify-content-center">
        <div class="card m-3" style={{ width: "18rem" }}>
          <Image Image filename={"logoA.png"} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/successStories" className="btn home__stories__button m-3">
          See success stories
        </Link>
      </div>
    </div>
  )
}

export default SuccessStories
