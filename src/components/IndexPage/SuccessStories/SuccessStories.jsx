import React from "react"
import "./successStories.scss"
// import Image from "../../Image"
import Img from "gatsby-image"
import { Link } from "gatsby"
// import { Card } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

const SuccessStories = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    {
      allContentfulSuccessStories(
        limit: 4
        sort: { fields: createdAt, order: DESC }
      ) {
        edges {
          node {
            id
            title
            slug
            createdAt
            author
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
      }
    }
  `)

  const info = data.allContentfulSuccessStories.edges

  console.log(info[0].node)

  return (
    <div className="home__stories py-5 bg-custom-lightGreen">
      <div className="wrap">
        {/* <div className="stories__image">

        <Image filename={"sample1.jpg"} />
      </div>
      <p className="stories__title">Success stories here</p>
      <Link to="/successStories">
        <StyledButton>Link to Success Stories</StyledButton>
      </Link> */}
        <h2 className="text-center">
          We help you find the right social investments.
        </h2>

        <div className="d-flex justify-content-center">
          {info.map((story, index) => (
            <div key={index} className="card m-3" style={{ width: "18rem" }}>
              <Img
                fluid={story.node.thumbnail.fluid}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">{story.node.title}</h3>
                <h6>by {story.node.author}</h6>
                <p className="card-text">{story.node.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/successStories" className="btn home__stories__button m-3">
            See success stories
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories
