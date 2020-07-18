import React from "react"
import "./aboutUs.scss"
import Image from "../Image"
import Img from "gatsby-image"
// import { StyledButton } from "../Elements/Elements"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Banner1 from "./aboutUs_banner1"
import Banner2 from "./aboutUs_banner2"

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulTeamMembers(sort: { fields: rank, order: ASC }) {
        edges {
          node {
            image {
              fluid(maxWidth: 120) {
                ...GatsbyContentfulFluid
              }
            }
            name
            position
            rank
          }
        }
      }
      contentfulImpactStats {
        title
        socialEntrepreneursMobilized
        businessesFunded
        impactInvestors
        totalFundsCollected
      }
    }
  `)

  const teamMembers = data.allContentfulTeamMembers.edges
  const impactStats = data.contentfulImpactStats

  return (
    <div className="aboutUs">
      <div className="aboutUs__banner">
        <Banner1 className="aboutUs__banner__bgc1" />
      </div>
      <div className="wrap mx-auto">
        <p className="h1 font-weight-bolder">About Us</p>
        <p className="wrap">
          This is a platform that connects investors and entrepreneurs who drive
          social change. Our web application incorporates a framework, called
          Wheel for Change, which measures the social impact of your projects
          and helps you connect with potential investors.
        </p>
        <p className="wrap">
          Wheel for Change acts as a mentor who unlocks someone’s
          entrepreneurial and impact potential; a facilitator who finds common
          objectives among investors and entrepreneurs; an innovator who wants
          to create an impact in the community; and a communicator who conveys
          ideas clearly and simply.
        </p>
        <br />
      </div>
      <div className="wrap mx-auto">
        <p className="h1 font-weight-bolder">What We Do</p>
        <p className="wrap">
          We help people who are making societal changes through innovation. We
          give enterprises the opportunity to grow their concepts into drivers
          of change that benefits society and the environment.
        </p>
        <div className="d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-sm-2">
              <div className="img-thumbnail aboutUs__icon">
                <Image filename={"aboutUs_icon1.png"} alt="icon1" />
              </div>
              <p className="h4">Embrace and drive change</p>
            </div>
            <div className="col-sm-2">
              <div className="img-thumbnail aboutUs__icon">
                <Image filename={"aboutUs_icon2.png"} alt="icon2" />
              </div>
              <p className="h4">Pursue growth and learning</p>
            </div>
            <div className="col-sm-2">
              <div className="img-thumbnail aboutUs__icon">
                <Image filename={"aboutUs_icon3.png"} alt="icon3" />
              </div>
              <p className="h4">Passionate and determined</p>
            </div>
            <div className="col-sm-2">
              <div className="img-thumbnail aboutUs__icon">
                <Image filename={"aboutUs_icon4.png"} alt="icon4" />
              </div>
              <p className="h4">Build relationships</p>
            </div>
            <div className="col-sm-2">
              <div className="img-thumbnail aboutUs__icon">
                <Image filename={"aboutUs_icon5.png"} alt="icon5" />
              </div>
              <p className="h4">Keep an open mind</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs__banner">
        <Banner2 className="aboutUs__banner__bgc2">
          <div className="wrap mx-auto">
            <p className="h1 font-weight-bolder">
              We believe passionately in the power of ideas that create an
              impact in the world
            </p>
            <div className="row">
              <div className="col-sm">
                <p className="display-3 font-weight-bolder">
                  {impactStats.socialEntrepreneursMobilized}
                </p>
                <p className="h3">social entrepreneurs mobilized</p>
              </div>
              <div className="col-sm">
                <p className="display-3 font-weight-bolder">
                  {impactStats.businessesFunded}
                </p>
                <p className="h3">businesses funded</p>
              </div>
              <div className="col-sm">
                <p className="display-3 font-weight-bolder">
                  {impactStats.impactInvestors}
                </p>
                <p className="h3">impact investors</p>
              </div>
              <div className="col-sm">
                <p className="display-3 font-weight-bolder">
                  ${impactStats.totalFundsCollected} million
                </p>
                <p className="h3">total funds collected</p>
              </div>
            </div>
          </div>
        </Banner2>
      </div>

      <div className="wrap mx-auto">
        <p className="h1 font-weight-bolder">Our Team</p>
        <p className="wrap">
          We bring a wealth of experience from social enterprise, start-ups,
          organizations, and non-profit sectors. Meet the team who set our
          global direction, goals and strategies.
        </p>
        <div className="d-flex justify-content-center">
          <div className="row">
            {teamMembers.map(({ node }, index) => {
              const { image, name, position } = node
              return (
                <div className="col-sm-4" key={index}>
                  <div className="img-thumbnail aboutUs__image">
                    <Img fluid={image.fluid} loading="auto" alt="team1" />
                  </div>
                  <div className="aboutUs__label">
                    <span className="aboutUs__label__name">{name}</span> |{" "}
                    {position}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* <Link to="/aboutUs">
        <StyledButton>Link to About Us</StyledButton>
      </Link> */}
    </div>
  )
}

export default AboutUs
