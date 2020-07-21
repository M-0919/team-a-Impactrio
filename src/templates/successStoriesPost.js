import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

// Styles
import stylesSuccess from "./successStoriesPost.module.scss"

class SuccessStoriesPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulSuccessStories

    return (
      <>
        <SEO title={post.title} />
        <div className={stylesSuccess.container}>
          <div className={stylesSuccess.title}>
            <h1>{post.title}</h1>
          </div>
          <p
            style={{
              display: `block`,
            }}
          >
            {post.date}
          </p>
          <Img fluid={post.thumbnail.fluid} />
          <div
            className={stylesSuccess.blogPostContent}
            dangerouslySetInnerHTML={{
              __html: post.text.childMarkdownRemark.html,
            }}
          />
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          />
        </div>
      </>
    )
  }
}

export default SuccessStoriesPostTemplate

export const pageQuery = graphql`
  query ContentfulSuccessStoriesPostBySlug($slug: String!) {
    contentfulSuccessStories(slug: { eq: $slug }) {
      author
      id
      slug
      title
      text {
        childMarkdownRemark {
          html
        }
      }
      thumbnail {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description
    }
  }
`
