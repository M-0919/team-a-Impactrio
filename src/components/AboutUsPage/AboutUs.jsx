import React from "react"
import "./aboutUs.scss"
import Image from "../Image"
// import { StyledButton } from "../Elements/Elements"
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"

const AboutUs = () => {
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

  return (
    <div className="aboutUs">
      {/* 

      <div className="about__svg">
        <img src="/sample3.svg" alt="sample3" />
      </div> */}
      <div className="aboutUs__banner">
        <Image filename={"aboutUs_banner1.jpg"} alt="banner1" />
      </div>
      <h2 className="aboutUs__title">About Us</h2>
      <p className="aboutUs__text">
        This is a platform that connects investors and entrepreneurs who drive
        social change. Our web application incorporates a framework, called
        Wheel for Change, which measures the social impact of your projects and
        helps you connect with potential investors.
      </p>
      <p className="aboutUs__text">
        Wheel for Change acts as a mentor who unlocks someone’s entrepreneurial
        and impact potential; a facilitator who finds common objectives among
        investors and entrepreneurs; an innovator who wants to create an impact
        in the community; and a communicator who conveys ideas clearly and
        simply.
      </p>
      <h2 className="aboutUs__title">What We Do</h2>
      <p className="aboutUs__text">
        We help people who are making societal changes through innovation. We
        give enterprises the opportunity to grow their concepts into drivers of
        change that benefits society and the environment.
      </p>
      <div class="row aboutUs__wwd">
        <div class="col-sm aboutUs__wwd__item">
          <div className="aboutUs__wwd__item__icon">
            <Image filename={"aboutUs_icon1.png"} alt="icon1" />
          </div>
          Embrace and drive change
        </div>
        <div class="col-sm aboutUs__wwd__item">
          <div className="aboutUs__wwd__item__icon">
            <Image filename={"aboutUs_icon2.png"} alt="icon2" />
          </div>
          Pursue growth and learning
        </div>
        <div class="col-sm aboutUs__wwd__item">
          <div className="aboutUs__wwd__item__icon">
            <Image filename={"aboutUs_icon3.png"} alt="icon3" />
          </div>
          Passionate and determined
        </div>
        <div class="col-sm aboutUs__wwd__item">
          <div className="aboutUs__wwd__item__icon">
            <Image filename={"aboutUs_icon4.png"} alt="icon4" />
          </div>
          Build relationships
        </div>
        <div class="col-sm aboutUs__wwd__item">
          <div className="aboutUs__wwd__item__icon">
            <Image filename={"aboutUs_icon5.png"} alt="icon5" />
          </div>
          Keep an open mind
        </div>
      </div>
      {/* <Link to="/aboutUs">
        <StyledButton>Link to About Us</StyledButton>
      </Link> */}
    </div>
  )
}

export default AboutUs
