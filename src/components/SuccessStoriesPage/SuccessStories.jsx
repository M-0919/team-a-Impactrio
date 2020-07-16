import React from "react"
import "./successStories.scss"

import Img from "gatsby-image"
import { StyledButton } from "../Elements/Elements"
import { Link } from "gatsby"
// import { Card } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

const SuccessStories = () => {
  const { allContentfulSuccessStories } = useStaticQuery(graphql`
    {
      allContentfulSuccessStories(
        sort: { order: DESC, fields: createdAt }
        limit: 3
      ) {
        edges {
          node {
            title
            slug
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
              {allContentfulSuccessStories.edges.map(({ node }, index) => {
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
          <div className="stories__footer text-center">
            <h2>
              Share your innovative ideas and tackle social challenges with us.
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default SuccessStories
