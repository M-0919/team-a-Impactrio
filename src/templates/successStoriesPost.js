import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

// Styles
import "./successStoriesPost.scss"

class SuccessStoriesPostTemplate extends React.Component {
  render() {
    // const post = this.props.data.contentfulSuccessStories

    return (
      <>
        <SEO  />
        {/* <SEO title={post.title} /> */}
        <div className="successStoriesPost wrap">
          <h1 className="title">Title</h1>
          {/* <h1 className="title">{post.title}</h1> */}

          <div className="successStoriesPost__thumbnail">
            <Img 
            // fluid={post.thumbnail.fluid} 
            />
          </div>
          <div
            className="blogPostContent my-5"
            // dangerouslySetInnerHTML={{
            //   __html: post.text.childMarkdownRemark.html,
            // }}
          />
        </div>
      </>
    )
  }
}

export default SuccessStoriesPostTemplate



// export const pageQuery = graphql`
//   query ContentfulSuccessStoriesPostBySlug($slug: String!) {
//     contentfulSuccessStories(slug: { eq: $slug }) {
//       author
//       id
//       slug
//       title
//       text {
//         childMarkdownRemark {
//           html
//         }
//       }
//       thumbnail {
//         fluid(quality: 90) {
//           ...GatsbyContentfulFluid_withWebp_noBase64
//         }
//       }
//       description
//     }
//   }
// `
