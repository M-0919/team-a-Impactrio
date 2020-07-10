import React from "react"
import "./successStories.scss"
import Image from "../Image"
// import { StyledButton } from "../../Elements/Elements"
// import { Link } from "gatsby"
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
    <>
    <div className="stories">
      {/* <div className="stories__image">
        <Image filename={"sample1.jpg"} />
      </div> */}
      {/* <p className="stories__title">Success stories here</p> */}
      <div className="card mb-3" style={{maxWidth: "540px"}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <Image 
          filename={"sample1.jpg"} 
          className="card-img" 
          alt=""
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
              This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
      {/* <Link to="/successStories">
        <StyledButton>Link to Success Stories</StyledButton>
      </Link> */}
    </div>
    </>
  )
}

export default SuccessStories
