import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import AboutUs from "../components/AboutUsPage/AboutUs"

const aboutUs = () => (
  <>
    <SEO title="About Us" />
    <AboutUs />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </>
)

export default aboutUs
