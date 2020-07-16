import React from "react"
import "./aboutUs.scss"
import Image from "../Image"
// import { StyledButton } from "../Elements/Elements"
// import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const AboutUs = () => {
  const BackgroundSection = ({ className, children }) => (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "aboutUs_banner2.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.file.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
          >
            {children}
          </BackgroundImage>
        )
      }}
    />
  )

  return (
    <div className="aboutUs">
      {/* 

      <div className="about__svg">
        <img src="/sample3.svg" alt="sample3" />
      </div> */}
      <div className="aboutUs__banner">
        <Image filename={"aboutUs_banner1.jpg"} alt="banner1" />
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
              Embrace and drive change
            </div>
            <div className="col-sm aboutUs__wwd__item">
              <div className="aboutUs__wwd__item__icon">
                <Image filename={"aboutUs_icon2.png"} alt="icon2" />
              </div>
              Pursue growth and learning
            </div>
            <div className="col-sm aboutUs__wwd__item">
              <div className="aboutUs__wwd__item__icon">
                <Image filename={"aboutUs_icon3.png"} alt="icon3" />
              </div>
              Passionate and determined
            </div>
            <div className="col-sm aboutUs__wwd__item">
              <div className="aboutUs__wwd__item__icon">
                <Image filename={"aboutUs_icon4.png"} alt="icon4" />
              </div>
              Build relationships
            </div>
            <div className="col-sm aboutUs__wwd__item">
              <div className="aboutUs__wwd__item__icon">
                <Image filename={"aboutUs_icon5.png"} alt="icon5" />
              </div>
              Keep an open mind
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs__banner">
        {/* <Image filename={"aboutUs_banner2.jpg"} alt="banner2" /> */}
        <BackgroundSection className="aboutUs__banner__bgc">
          <div className="wrap">
            <h2 className="aboutUs__banner__title">
              We believe passionately in the power of ideas that create an
              impact in the world
            </h2>
            <div className="row aboutUs__banner__stats">
              <div className="col-sm aboutUs__banner__stats__item">
                <h2 className="aboutUs__banner__stats__item__head">55</h2>
                <p className="aboutUs__banner__stats__item__subhead">
                  social entrepreneurs mobilized
                </p>
              </div>
              <div className="col-sm aboutUs__banner__stats__item">
                <h2 className="aboutUs__banner__stats__item__head">60</h2>
                <p className="aboutUs__banner__stats__item__subhead">
                  businesses funded
                </p>
              </div>
              <div className="col-sm aboutUs__banner__stats__item">
                <h2 className="aboutUs__banner__stats__item__head">118</h2>
                <p className="aboutUs__banner__stats__item__subhead">
                  impact investors
                </p>
              </div>
              <div className="col-sm aboutUs__banner__stats__item">
                <h2 className="aboutUs__banner__stats__item__head">
                  $31 million
                </h2>
                <p className="aboutUs__banner__stats__item__subhead">
                  total funds collected
                </p>
              </div>
            </div>
          </div>
        </BackgroundSection>
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

        <div className="row aboutUs__team">
          <div className="col-sm aboutUs__team__member">
            <div className="aboutUs__team__member__image">
              <Image filename={"aboutUs_team1.jpeg"} alt="team1" />
            </div>
            <div className="aboutUs__team__member__label">
              <span className="aboutUs__team__member__label__name">
                Ashraful Hasan
              </span>{" "}
              | CEO
            </div>
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
