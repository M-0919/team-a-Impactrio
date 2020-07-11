import React from "react"
import "./howItWorks.scss"
import Image from "../../Image"
import { Link } from "gatsby"
import { StyledButton } from "../../Elements/Elements"
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
    <div className="home__how py-5">
      {/* <div className="how__image">
        <Image filename={"sample2.jpg"} alt="sample" />
      </div>
      <p className="how__title">How It Works here</p>
      <Link to="/howItWorks">
        <StyledButton>Link to How It Works</StyledButton>
      </Link> */}
      <div className="d-flex justify-content-center">
        <div class="card m-3" style={{ width: "18rem" }}>
          <Image Image filename={"growth.png"} class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 class="card-title">Investors</h2>
            <p class="card-text">
              Impactraction allows you to invest in social enterprises through a
              few simple steps online. Our platform gives investors access to
              impact driven investment opportunities.
            </p>
          </div>
        </div>
        <div class="card m-3" style={{ width: "18rem" }}>
          <Image
            Image
            filename={"project.png"}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title">How It Works</h2>
            <p class="card-text">
              Impactraction helps you connect with social investors. We give
              entrepreneurs and their projects support on raising funds, from
              ideation to measuring their impact.
            </p>
          </div>
        </div>
        <div class="card m-3" style={{ width: "18rem" }}>
          <Image
            Image
            filename={"bar-chart.png"}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title">Entrepreneurs</h2>
            <p class="card-text">
              Investors can select and invest on opportunities that supports
              their cause by utilizing the platform and leveraging our extensive
              investment projects and effective networking process.
            </p>
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
