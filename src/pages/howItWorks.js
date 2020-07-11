import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import TabContainer from "../components/HowItWorksPage/TabContainer/TabContainer"

const howItWorks = () => (
  <>
    <SEO title="How It Wroks" />
    <TabContainer />
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default howItWorks
