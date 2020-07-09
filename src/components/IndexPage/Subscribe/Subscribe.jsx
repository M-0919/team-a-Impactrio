import React from "react"
import "./subscribe.scss"
import Image from "../../Image"
import { Link } from "gatsby"
import { StyledButton } from "../../Elements/Elements"
// import { useStaticQuery, graphql } from "gatsby"

const Subscribe = () => {
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
    <div className="home__subscribe py-5">
      {/* <div className="how__image">
        <Image filename={"sample2.jpg"} alt="sample" />
      </div>
      <p className="how__title">How It Works here</p>
      <Link to="/Subscribe">
        <StyledButton>Link to How It Works</StyledButton>
      </Link> */}
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
        <Link to="/Subscribe" className="btn btn-outline-danger">
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default Subscribe
