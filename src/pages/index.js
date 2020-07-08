import React from "react"

/* ------------------------------- COMPONENTS ------------------------------- */

import SEO from "../components/seo"
import AboutUs from "../components/IndexPage/AboutUs/AboutUs"
import HowItWorks from "../components/IndexPage/HowItWorks/HowItWorks"
import SuccessStories from "../components/IndexPage/SuccessStories/SuccessStories"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <AboutUs />
    <HowItWorks />
    <SuccessStories />
  </>
)

export default IndexPage
