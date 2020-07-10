import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Tabs from "../components/HowItWorksPage/Tabs/Tabs"
import Row1 from "../components/HowItWorksPage/Row1/Row1"
import Row2 from "../components/HowItWorksPage/Row2/Row2"

const howItWorks = () => (
  <>
    <SEO title="How It Wroks" />
    <Tabs />
    <Row1 />
    <Row2 />
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default howItWorks
