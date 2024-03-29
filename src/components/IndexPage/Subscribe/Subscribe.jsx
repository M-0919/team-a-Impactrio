import React from "react"
import "./subscribe.scss"

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
    <div className="home__subscribe py-5 bg-custom-lightOrange">
      <div className="wrap">
        <div className="d-flex flex-wrap justify-content-center">
          <p className="col-md-4 col-sm-10">

            Subscribe to our monthly newsletter and stay up to date with all
            news and updates.
          </p>
          <form className="form-inline">
            <div className="form-group mb-2"></div>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputEmail" className="sr-only">
                Email
              </label>
              <input
                type="email"
                aria-label="inputEmail"
                className="form-control pr-5"
                id="inputEmail"
                placeholder="Enter your email address"
              />
            </div>
            <button type="submit" className="btn mb-2 home__subscribe__button">
              Read more
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
