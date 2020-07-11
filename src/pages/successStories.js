import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import SuccessStories from "../components/SuccessStoriesPage/SuccessStories"
import { StyledButton } from "../components/Elements/Elements"

const successStories = () => (
  <>
    <SEO title="Success Stories" />
    <SuccessStories />
    
    <Link to="/">
    <StyledButton>Go back to the homepage</StyledButton>
    </Link>
  </>
)

export default successStories
