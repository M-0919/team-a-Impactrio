import React from "react"
import "./successStories.scss"
import Image from "../../Image"
import { Link } from "gatsby"
// import { Card } from "react-bootstrap"
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
    <div className="home__stories py-5 bg-custom-lightGreen">
      <div className="wrap">
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
          <div className="card m-3" style={{ width: "18rem" }}>
            <Image
              Image
              filename={"logoA.png"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
    </div>
  )
}

export default SuccessStories
