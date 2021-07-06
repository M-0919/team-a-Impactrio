// const axios = require("axios")
// const dotenv = require("dotenv")
// dotenv.config()
// const Base64 = require("js-base64").Base64

// // For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
// exports.handler = (event, context, callback) => {
//   if (event.httpMethod !== "POST") {
//     callback(null, {
//       statusCode: 405,
//       body: "Method Not Allowed",
//     })
//   }

//   axios
//     .post(process.env.GATSBY_AGILECRM_URL, event.body, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Basic ${Base64.encode(
//           process.env.GATSBY_AGILECRM_USERNAME +
//             ":" +
//             process.env.GATSBY_AGILECRM_API_KEY
//         )}`,
//       },
//     })

//     .then(() => {
//       callback(null, {
//         statusCode: 200,
//         body: JSON.stringify({ fetch: true }),
//       })
//     })

//     .catch(() => {
//       callback(null, {
//         statusCode: 400,
//         body: JSON.stringify({
//           fetch: false,
//           message: "There seems to be a problem.",
//         }),
//       })
//     })
// }
