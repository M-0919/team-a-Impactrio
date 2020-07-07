import React from "react"

/* ------------------------------- COMPONENTS ------------------------------- */
import Layout from "../components/Layout/Layout"
import AboutUs from "../components/AboutUs/AboutUs"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import SuccessStories from "../components/SuccessStories/SuccessStories"

const IndexPage = () => (
  <Layout>
    <AboutUs />
    <HowItWorks />
    <SuccessStories />
  </Layout>
)

export default IndexPage
