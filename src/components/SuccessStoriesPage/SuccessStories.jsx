import React from "react"
import "./successStories.scss"
// import Image from "../Image"
import Img from "gatsby-image"
import { StyledButton } from "../Elements/Elements"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

const SuccessStories = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulSuccessStories(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            title
            slug
            createdAt
            id
            text {
              childMarkdownRemark {
                excerpt(pruneLength: 688)
              }
            }
            thumbnail {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  // console.log(
  //   JSON.stringify(data.allContentfulSuccessStories.edges[0].node.text));

  // console.log(data)

  const successPost = data.allContentfulSuccessStories.edges
  return (
    <>
      <div className="stories wrap pt-5">
        <div className="stories__title">
          <h1>
            Stories from our drivers of change to inspire your own business
            success
          </h1>
        </div>
        <div className="stories__subtitle">
          <h4 className="pb-5">
            Discover how enterprises and organizations have expanded their reach
            and gained more supporters with help from Impactraction.
          </h4>
        </div>
        <div className="inner-wrap">
          <div className="stories__card container-fluid">
            <div className="row">
              {successPost.map(({ node }, index) => {
                const { id, slug, text, thumbnail, title } = node

                return index === 0 ? (
                  <div className="col-12" key={id}>
                    <div className="border d-flex mb-5">
                      <div className="stories__card__row1__description p-5">
                        <div className="d-flex flex-column justify-content-between h-100">
                          <div>
                            <h2 className="stories__card__row1__description__title font-weight-bold">
                              {title}
                            </h2>
                            <p className="stories__card__row1__description__excerpt mt-5">
                              {text.childMarkdownRemark.excerpt}
                            </p>
                          </div>
                          <div>
                            <Link to={`/successStories/${slug}`}>
                              <StyledButton outline={true}>
                                Read more
                              </StyledButton>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="stories__card__row1__image">
                        <Img fluid={thumbnail.fluid} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-6" key={id}>
                    <div className="border">
                      <div>
                        <Img fluid={thumbnail.fluid} />
                      </div>
                      <div className="stories__card__row2__description p-5">
                        <div className="d-flex flex-column justify-content-between h-100">
                          <div>
                            <h2 className="stories__card__row2__description__title font-weight-bold">
                              {title}
                            </h2>
                            <p className="stories__card__row2__description__excerpt mt-5">
                              {text.childMarkdownRemark.excerpt}
                            </p>
                            <div className="mt-5">
                              <Link to={`/successStories/${slug}`}>
                                <StyledButton outline={true}>
                                  Read more
                                </StyledButton>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* {successPost.map(({ node }) => {
            const title = node.title || node.slug
            return (
              <div key={node.slug} className="stories__card">
              <div className="card mb-3" style={{ width: "100%" }}>
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <div className="card-body">
                      <h3 className="card-title">{title}</h3>
                      <p className="card-text" dangerouslySetInnerHTML={{__html: node.text.childMarkdownRemark.excerpt}}>
                      </p>
                      <Link to="/">
                        <StyledButton>Read More</StyledButton>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7"><Img fluid={node.thumbnail.fluid} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card"><Img fluid={node.thumbnail.fluid} className="card-img-top" alt=""/>
                    <div className="card-body">
                      <h3 className="card-title">{title}</h3>
                      <p className="card-text" dangerouslySetInnerHTML={{__html: node.text.childMarkdownRemark.excerpt}}>
                      </p>
                      <Link to="/">
                        <StyledButton>Read More</StyledButton>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card"><Img fluid={node.thumbnail.fluid} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h3 className="card-title">{title}</h3>
                      <p className="card-text" dangerouslySetInnerHTML={{__html: node.text.childMarkdownRemark.excerpt}}>
                      </p>
                      <Link to="/">
                        <StyledButton>Read More</StyledButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })} */}

          <div className="stories__footer text-center">
            <h2>
              Share your innovative ideas and tackle social challenges with us.
            </h2>
          </div>
          {/* <Link to="/">
        <StyledButton>Read More</StyledButton>
      </Link> */}
        </div>
      </div>
    </>
  )
}

export default SuccessStories
