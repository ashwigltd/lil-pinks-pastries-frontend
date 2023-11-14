// import { graphql, useStaticQuery } from "gatsby"
// import React from "react"

// import Gallery from "@browniebroke/gatsby-image-gallery"

// const InstagramGallery = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allInstaNode(limit: 12, sort: {fields: [timestamp], order: DESC}) {
//         edges {
//           node {
//             localFile {
//               absolutePath
//               childImageSharp {
//                 thumb: gatsbyImageData(
//                   width: 270
//                   height: 270
//                   placeholder: NONE
//                 )
//                 full: gatsbyImageData(layout: FULL_WIDTH)
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   const images = data.allInstaNode.edges.map(
//     ({ node }) => node.localFile.childImageSharp
//   )

//   return (
//     <div>
//       <h2>Instagram Gallery</h2>
//       <div>
//         <Gallery images={images}></Gallery>
//       </div>
//     </div>
//   )
// }

// export default InstagramGallery
