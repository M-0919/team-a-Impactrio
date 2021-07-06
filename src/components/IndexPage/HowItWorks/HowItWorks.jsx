import React from "react"
import "./howItWorks.scss"
// import Image from "../../Image"
import Icon from "./icon"
// import Img from "gatsby-image";
// import { howItWorks } from "../../../../website/index"
import { useStaticQuery, graphql } from "gatsby";
// import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import { StyledButton } from "../../Elements/Elements"

const HowItWorks = () => {

  
  const { 
    site: {
        siteMetadata: {
          // author,
          // description,
          // copyright,
          socialMedia: {
            instagram,
            linkedin,
            twitter
          }
        }
    }
} = useStaticQuery(graphql`
{
  site {
    siteMetadata {
      author
      description
      copyright
      socialMedia {
        instagram
        linkedin
        twitter
      }
    }
  }
}
`)

  return (
    <div className="home__how py-5 wrap">
      <Container className="home__how__container">
        <Row className="justify-content-around">
        <Col md={3} className="home__how__column">
                <div className="home__how__column__image">
                  <a href={instagram} target="_blank" rel="noopper noreferrer" >
                    <Icon name="image01" />
                  </a>
                </div>
        </Col>
        <Col md={3} className="home__how__column">
                <div className="home__how__column__image">
                  <a href={linkedin} target="_blank" rel="noopper noreferrer" >
                    <Icon name="image02" />
                  </a>
                </div>
        </Col>
        <Col md={3} className="home__how__column">
                <div className="home__how__column__image">
                <a href={twitter} target="_blank" rel="noopper noreferrer" >
                    <Icon name="image03" />
                  </a>
                </div>
        </Col>

          
          {/* {howItWorks.map((item, index) => {
            const { instagram, linkedin, twitter } = item
            return (
              <Col key={index} md={3} className="home__how__column">
                <div className="home__how__column__image">
                  <Img
                    fluid={instagram.childImageSharp.fluid}
                    alt="instagram"
                  // filename={icon} 
                  />
                </div>
                <div className="home__how__column__image">
                  <Img
                    fluid={linkedin.childImageSharp.fluid}
                    alt="linkedin"
                  // filename={icon} 
                  />
                </div>
                <div className="home__how__column__image">
                  <Img
                    fluid={twitter.childImageSharp.fluid}
                    alt="twitter"
                  // filename={icon} 
                  />
                </div> */}
                {/* <div className="home__how__column__image">
                  <Image filename={icon} />
                </div>
                <div className="home__how__column__description">
                  <h2 className="home__how__column__title mt-5">{title}</h2>
                  <p className="home__how__column__text">{description}</p>
                </div> */}
              {/* </Col>
            )
          })} */}
        </Row>
      </Container>

      {/* <div className="text-center pt-5 pb-3">
        <Link to="/howItWorks">
          <StyledButton outline={true}>Saiba mais</StyledButton>
        </Link>
      </div> */}
    </div>
  )
}

export default HowItWorks





