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
      {/* 
      <div className="about__svg">
        <img src="/sample3.svg" alt="sample3" />
      </div> */}
      <div className="aboutUs__banner">
        <Banner1 className="aboutUs__banner__bgc1" />
      </div>
      <div className="wrap">
        <div className="inner-wrap">
          <h2 className="aboutUs__title">About Us</h2>
          <p className="aboutUs__text">
            This is a platform that connects investors and entrepreneurs who
            drive social change. Our web application incorporates a framework,
            called Wheel for Change, which measures the social impact of your
            projects and helps you connect with potential investors.
          </p>
          <p className="aboutUs__text">
            Wheel for Change acts as a mentor who unlocks someone’s
            entrepreneurial and impact potential; a facilitator who finds common
            objectives among investors and entrepreneurs; an innovator who wants
            to create an impact in the community; and a communicator who conveys
            ideas clearly and simply.
          </p>
        </div>
      </div>
      <div className="wrap">
        <div className="inner-wrap">
          <h2 className="aboutUs__title">What We Do</h2>
          <p className="aboutUs__text">
            We help people who are making societal changes through innovation.
            We give enterprises the opportunity to grow their concepts into
            drivers of change that benefits society and the environment.
          </p>
          <div className="row aboutUs__wwd">
            <div className="col-sm aboutUs__wwd__item">
              <div className="aboutUs__wwd__item__icon">
                <Image filename={"aboutUs_icon1.png"} alt="icon1" />
              </div>
              <p className="aboutUs__wwd__item__text">
                Embrace and drive change
              </p>
            </div>
            <div className="col-sm aboutUs__wwd__item">
              <div className="aboutUs__wwd__item__icon">
                <Image filename={"aboutUs_icon2.png"} alt="icon2" />
              </div>
              <p className="aboutUs__wwd__item__text">
                Pursue growth and learning
              </p>
            </div>
            <div className="col-sm aboutUs__wwd__item">
              <div className="aboutUs__wwd__item__icon">
                <Image filename={"aboutUs_icon3.png"} alt="icon3" />
              </div>
              <p className="aboutUs__wwd__item__text">
                Passionate and determined
              </p>
            </div>
            <div className="col-sm aboutUs__wwd__item">
              <div className="aboutUs__wwd__item__icon">
                <Image filename={"aboutUs_icon4.png"} alt="icon4" />
              </div>
              <p className="aboutUs__wwd__item__text">Build relationships</p>
            </div>
            <div className="col-sm aboutUs__wwd__item">
              <div className="aboutUs__wwd__item__icon">
                <Image filename={"aboutUs_icon5.png"} alt="icon5" />
              </div>
              <p className="aboutUs__wwd__item__text">Keep an open mind</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs__banner">
        <Banner2 className="aboutUs__banner__bgc2">
          <div className="wrap">
            <h2 className="aboutUs__banner__title">
              We believe passionately in the power of ideas that create an
              impact in the world
            </h2>
            <div className="row aboutUs__banner__stats">
              <div className="col-sm aboutUs__banner__stats__item">
                <h2 className="aboutUs__banner__stats__item__head">
                  {impactStats.socialEntrepreneursMobilized}
                </h2>
                <p className="aboutUs__banner__stats__item__subhead">
                  social entrepreneurs mobilized
                </p>
              </div>
              <div className="col-sm aboutUs__banner__stats__item">
                <h2 className="aboutUs__banner__stats__item__head">
                  {impactStats.businessesFunded}
                </h2>
                <p className="aboutUs__banner__stats__item__subhead">
                  businesses funded
                </p>
              </div>
              <div className="col-sm aboutUs__banner__stats__item">
                <h2 className="aboutUs__banner__stats__item__head">
                  {impactStats.impactInvestors}
                </h2>
                <p className="aboutUs__banner__stats__item__subhead">
                  impact investors
                </p>
              </div>
              <div className="col-sm aboutUs__banner__stats__item">
                <h2 className="aboutUs__banner__stats__item__head">
                  ${impactStats.totalFundsCollected} million
                </h2>
                <p className="aboutUs__banner__stats__item__subhead">
                  total funds collected
                </p>
              </div>
            </div>
          </div>
        </Banner2>
      </div>
      <div className="wrap">
        <div className="inner-wrap">
          <h2 className="aboutUs__title">Our Team</h2>
          <p className="aboutUs__text">
            We bring a wealth of experience from social enterprise, start-ups,
            organizations, and non-profit sectors. Meet the team who set our
            global direction, goals and strategies.
          </p>
        </div>

        {teamMembers.map(({ node }, index) => {
          const { image, name, position } = node

          return index === 0 ? (
            <div className="row aboutUs__team">
              <div className="col-sm-3 aboutUs__team__member">
                <div className="aboutUs__team__member__image">
                  <Img fluid={image.fluid} loading="auto" alt="team1" />
                </div>
                <div className="aboutUs__team__member__label">
                  <span className="aboutUs__team__member__label__name">
                    {name}
                  </span>{" "}
                  | {position}
                </div>
              </div>
            </div>
          ) : (
            <div className="row aboutUs__team">
              <div className="col-sm-3 aboutUs__team__member">
                <div className="aboutUs__team__member__image">
                  <Img fluid={image.fluid} loading="auto" alt="team1" />
                </div>
                <div className="aboutUs__team__member__label">
                  <span className="aboutUs__team__member__label__name">
                    {name}
                  </span>{" "}
                  | {position}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* <Link to="/aboutUs">
        <StyledButton>Link to About Us</StyledButton>
      </Link> */}
    </div>
  )
}

export default AboutUs
