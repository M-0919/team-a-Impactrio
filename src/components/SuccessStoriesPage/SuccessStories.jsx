import React from "react"
import "./successStories.scss"
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
                    <div className="stories__card__row1__description card mb-3" style={{ width: "100%" }}>
                      <div className="row no-gutters">
                        <div className="col-md-5">
                          <div className="card-body">
                            <div>
                            <h3 className="stories__card__row1__description__title card-title">{title}</h3>
                              <p className="stories__card__row1__description__excerpt card-text">
                                {text.childMarkdownRemark.excerpt}
                              </p>
                            </div>
                            <div className="mt-5">
                              <Link to={`/successStories/${slug}`}>
                                <StyledButton outline={true}>
                                  Read more
                                </StyledButton>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="stories__card__row1__image col-md-7">
                        <Img fluid={thumbnail.fluid} />
                      </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-md-6" key={id}>
                    <div className="card"><div><Img fluid={thumbnail.fluid} className="card-img-top" alt=""/></div>
                      <div className="stories__card__row2__description card-body">
                      <h3 className="stories__card__row2__description__title card-title">{title}</h3>
                          <div>
                            <p className="stories__card__row2__description__excerpt card-text">
                              {text.childMarkdownRemark.excerpt}
                            </p>
                            <div className="my-4">
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
