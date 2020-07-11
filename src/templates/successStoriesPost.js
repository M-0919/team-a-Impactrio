import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

// Styles
import styles from "./successStoriesPost.scss"

class SuccessStoriesPostTemplate extends React.Component {
  render() {
    console.log(this.props.data)
    const post = this.props.data.contentfulSuccessStories

    return (
      <>
        <SEO title={post.title} />
        <h1>{post.title}</h1>
        <p
          style={{
            display: `block`,
          }}
        >
          {post.date}
        </p>
        <Img fluid={post.thumbnail.fluid} />
        <div
          className={styles.blogPostContent}
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
    }
  }
`
