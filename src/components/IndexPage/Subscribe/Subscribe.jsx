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
        <p className="col-4">
          Subscribe to our monthly newsletter and stay up to date with all news
          and updates.
        </p>
        <form class="form-inline">
          <div class="form-group mb-2"></div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputEmail" class="sr-only">
              Email
            </label>
            <input
              type="email"
              class="form-control pr-5"
              id="inputEmail"
              placeholder="Enter your email address"
            />
          </div>
          <button type="submit" class="btn mb-2 home__subscribe__button">
            Read more
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
