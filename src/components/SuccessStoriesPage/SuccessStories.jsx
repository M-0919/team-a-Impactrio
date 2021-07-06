import React from "react"
import "./successStories.scss"
// import Img from "gatsby-image"
// import { StyledButton } from "../Elements/Elements"
// import { Link } from "gatsby"
// import ImgProfile from "../../../images/elen_profile_bg.png"
// import { useStaticQuery, graphql } from "gatsby"



const SuccessStories = () => (
  <>
    {/* <SEO title="Home" /> */}
         <div className="stories wrap pt-5">
         <div className="stories__title">
           <h1>
             Histórias de carreiras de engenheiros e arquitetos
           </h1>
         </div>
         <div className="stories__subtitle mt-3">
           <h4>
             Saiba mais detalhes destas experiências.
           </h4>
         </div>
         <br />
         <div className="inner-wrap">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0">
          <div>
            {/* <BackgroundSection /> */}
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <BackgroundSection /> */}
              </div>
              <div className="carousel-item">
                {/* <ProfileBackground /> */}
              </div>
              <div className="carousel-item">
                {/* <ImageProfile name="image03" /> */}
              </div>
              <div className="carousel-item">
                {/* <ImageProfile name="image03" /> */}
              </div>
            </div>
            {/* <div className="profile">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <img className="img-responsive" src={ImgProfile} alt="" /> 
                    <div className="title text-center">
                      <h1>I am Elen Ferreira</h1>
                      <h5 className="text a">I'm a Web Designer.</h5>
                      <h5 className="text b">I'm a Web Developer.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* <About />
    <Gallery />
    <Contact /> */}


    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

    </div>
    </div>
  </>
)

export default SuccessStories


