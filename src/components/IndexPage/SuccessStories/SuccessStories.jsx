import React from "react"
import "./successStories.scss"
import Youtube from "./Youtube"
// import { Link } from "gatsby"
// import { StyledButton } from "../../Elements/Elements"

const SuccessStories = () => {
  return (
    <Youtube className="home__successStories__youtube">
      <div className="home__successStories wrap py-5">
        {/* <div className="home__successStories__description p-5">
            <h1 className="font-weight-bold">
              Em construção
            </h1>
          <div className="my-3"> */}
            {/* <Link to="aboutUs">
              <StyledButton outline={true}>
                Read more about what we do
              </StyledButton>
            </Link> */}
          {/* </div>
        </div> */}
      </div>
    </Youtube>
  )
}

export default SuccessStories