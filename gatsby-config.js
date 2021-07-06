const path = require(`path`)



// const dotenv = require("dotenv")
// const { createProxyMiddleware } = require("http-proxy-middleware")

// if (process.env.NODE_ENV !== "production") {
//   dotenv.config()
// }
module.exports = {
  plugins: [`gatsby-plugin-fontawesome-css`],
}


module.exports = {
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     createProxyMiddleware({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": "",
  //       },
  //     })
  //   )
  // },
  siteMetadata: {
    title: `Brazilian Engineers and Architects in BC`,
    description: `Organização de Brasileiros Engenheiros e Arquitetos em British Columbia - Canadá`,
    author: `Grupo de Trabalho BEABC`,
    copyright: `© 2020 ELEN FERREIRA | All Rights Reserved`,
    siteUrl: `https://beabc.ca/`,
    socialMedia: {
      instagram: 'https://www.instagram.com/beabc_?utm_medium=copy_link',
      linkedin: 'https://www.linkedin.com/company/beabc-canada',
      twitter: 'https://www.twitter.com/'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: [`300`, `400`, `800`],
          },
          {
            family: `Roboto`,
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 70,
              withWebp: true,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.GATSBY_SPACE_ID,
    //     accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/beabc_logo.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
