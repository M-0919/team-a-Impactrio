import React from "react"
import "./footer.scss"
import Image from "../../Image"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
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
    <footer className="footer  bg-custom-lightGreen">
      <div className="wrap d-flex justify-content-center">
        <div className="footer__image mt-5 pt-5">
          <Image className="align-middle pt-5" filename={"logoB.png"} />
        </div>
        <div className="footer_links mt-4">
          <div>MENU</div>
          <div>
            <Link to="/aboutUs">About Us</Link>
          </div>
          <div>
            <Link to="/howItWorks">How It Works</Link>
          </div>
          <div>
            <Link to="/successStories">Success Stories</Link>
          </div>
          <div>
            <Link to="/">Contact Us</Link>
          </div>
        </div>
        {/* <p className="footer__title">footer here</p> */}
      </div>
    </footer>
  )
}

export default Footer
