/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const successStoriesPost = path.resolve(
//     `./src/templates/successStoriesPost.js`
//   )
//   return graphql(
//     `
//       {
//         allContentfulSuccessStories {
//           edges {
//             node {
//               slug
//               id
//               title
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog posts pages.
//     const posts = result.data.allContentfulSuccessStories.edges

//     posts.forEach((post, index) => {
//       const previous = index === posts.length - 1 ? null : posts[index + 1].node
//       const next = index === 0 ? null : posts[index - 1].node

//       createPage({
//         path: `/successStories/${post.node.slug}`,
//         component: successStoriesPost,
//         context: {
//           slug: post.node.slug,
//           previous,
//           next,
//         },
//       })
//     })

//     return null
//   })
// }
