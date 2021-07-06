import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const Icon = (props) => {

    const { image01, image02, image03 } = useStaticQuery(graphql`
    query {
      image01: file(relativePath: { eq: "7.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image02: file(relativePath: { eq: "9.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image03: file(relativePath: { eq: "8.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

    return (
        <>
        {(() => {
            switch (props.name) {
                case 'image01':
                    return <Img fluid={image01.childImageSharp.fluid} alt="Image01"/>
                case 'image02':
                    return <Img fluid={image02.childImageSharp.fluid} alt="Image02"/>
                case 'image03':
                    return <Img fluid={image03.childImageSharp.fluid} alt="Image03"/>    
                default:
                    return null;
            }
        })()}
        
        </>
    );
};

export default Icon;