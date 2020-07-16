import React from "react"
import "./successStories.scss"
import Image from "../Image"
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
            <div class="row">
              {allContentfulSuccessStories.edges.map(({ node }, index) => {
                const { id, slug, text, thumbnail, title } = node
                return index === 0 ? <p>12</p> : <p>6</p>
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

{
  /* <div className="card mb-3" style={{ width: "100%" }}>
              <div className="row no-gutters">
                <div className="col-md-5">
                  <div className="card-body">
                    <h3 className="card-title">We Volunteer</h3>
                    <br></br>
                    <p className="card-text">
                      We Volunteer stands for an active society. We want to make
                      volunteering part of everyone’s daily life by making it
                      easy and rewarding.
                    </p>
                    <p>
                      Inspired by the willingness to do more good, in August
                      2017 Malte founded We Volunteer as an online platform to
                      connect people and corporations to volunteering projects
                      and social initiatives. Anyone can easily find a social
                      project matching their skills and interests and get
                      involved. Since 2015, We Volunteer has grown in size and
                      scope and connected 250,000 unique users to more than
                      3,500 volunteer opportunities in 250 cities across Canada.
                    </p>

                    <Link to="/">
                      <StyledButton>Read More</StyledButton>
                    </Link>
                  </div>
                </div>
                <div className="col-md-7">
                  <Image
                    filename={"sucessStories1.png"}
                    className="card-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <Image
                    filename={"sucessStories2.png"}
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h3 className="card-title">Green Earth</h3>
                    <p className="card-text">
                      The Climate Action Network was founded with the goal of
                      uniting climate activists into a movement, with a strategy
                      of bottom-up organizing local-climate-focused campaigns
                      and projects around the world. Green Earth is an
                      educational and research organization dedicated to the
                      healing and harmonizing of the relationships between
                      humanity and the earth. Our objectives are to help bring
                      about changes in attitudes, values, perceptions, and world
                      views that are based on ecological balance and respect for
                      all life-forms on earth.
                    </p>
                    <Link to="/">
                      <StyledButton>Read More</StyledButton>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <Image
                    filename={"sucessStories3.png"}
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h3 className="card-title">Aid:Water</h3>
                    <p className="card-text">
                      663 million people in the world live without clean water.
                      At Aid:Water, the mission is to change that by bringing
                      clean and safe drinking water to people in developing
                      countries. The organization works with dozens of local
                      partners overseas, and has completed over 21,000 water
                      projects to bring more than 6.4 million people access to
                      water, hygiene, and improved sanitation. Aid:Water
                      transforms the lives of the poorest and most marginalized
                      people by improving access to clean water, safe toilets,
                      and hygiene programs.
                    </p>
                    <Link to="/">
                      <StyledButton>Read More</StyledButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */
}
