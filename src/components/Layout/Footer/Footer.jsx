import React from "react"
import "./footer.scss"
import Image from "../../Image"
// import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
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
    <footer className="footer">
      <div className="footer__image">
        <Image filename={"logoB.png"} />
      </div>
      <p className="footer__title">footer here</p>
    </footer>
  )
}

export default Footer
