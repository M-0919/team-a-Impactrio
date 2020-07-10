import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import SuccessStories from "../components/SuccessStoriesPage/SuccessStories"

const successStories = () => (
  <>
    <SEO title="Success Stories" />
    <SuccessStories />
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default successStories
