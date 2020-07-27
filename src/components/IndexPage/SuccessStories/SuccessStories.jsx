import React from "react"
import "./successStories.scss"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Card from "react-bootstrap/Card"
import { StyledButton } from "../../Elements/Elements"

const SuccessStories = () => {
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
                excerpt(pruneLength: 138)
              }
            }
            thumbnail {
              fluid {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)

  const info = data.allContentfulSuccessStories.edges

  return (
    <div className="home__stories bg-custom-lightGreen pb-3">
      <div className="wrap">
        <h2 className="text-center py-5 font-weight-bold home__stories__title">
          We help you find the right social investments.
        </h2>

        <div className="home__stories__card-items">
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
            {info.map(({ node }) => (
              <div className="col" key={node.id}>
                <Card key={node.id}>
                  <Link to={`/successStories/${node.slug}`}>
                    <Img
                      fluid={node.thumbnail.fluid}
                      className="home__stories__card-items__image"
                      alt="..."
                    />
                    <Card.Body>
                      <h3 className="home__stories__card-items__title font-weight-bold">
                        {node.title}
                      </h3>
                      <div className="home__stories__card-items__discription">
                        <p>by {node.author}</p>
                        <p className="mt-3">
                          {node.text.childMarkdownRemark.excerpt}
                        </p>
                      </div>
                    </Card.Body>
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center py-5">
          <Link to="/successStories">
            <StyledButton outline={true}>See success stories</StyledButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories
