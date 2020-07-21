import React from "react"
import "./howItWorks.scss"
import Image from "../../Image"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"

const HowItWorks = () => {
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
    <div className="home__how py-5 wrap">
      {/* <div className="how__image">
        <Image filename={"sample2.jpg"} alt="sample" />
      </div>
      <p className="how__title">How It Works here</p>
      <Link to="/howItWorks">
        <StyledButton>Link to How It Works</StyledButton>
      </Link> */}
      <div className="d-flex flex-wrap justify-content-center">
        <div class="row">
          <div class="col-sm-10 col-md-3">
            <div className="card m-3" style={{ width: "18rem" }}>
              <Image
                Image
                filename={"growth.png"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2 className="card-title">Investors</h2>
                <p className="card-text">
                  Impactraction allows you to invest in social enterprises
                  through a few simple steps online. Our platform gives
                  investors access to impact driven investment opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-10 col-md-3">
            <div className="card m-3" style={{ width: "18rem" }}>
              <Image
                Image
                filename={"project.png"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2 className="card-title">How It Works</h2>
                <p className="card-text">
                  Impactraction helps you connect with social investors. We give
                  entrepreneurs and their projects support on raising funds,
                  from ideation to measuring their impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-10 col-md-3">
            <div className="card m-3" style={{ width: "18rem" }}>
              <Image
                Image
                filename={"bar-chart.png"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2 className="card-title">Entrepreneurs</h2>
                <p className="card-text">
                  Investors can select and invest on opportunities that supports
                  their cause by utilizing the platform and leveraging our
                  extensive investment projects and effective networking
                  process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/howItWorks" className="btn home__how__button">
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default HowItWorks
