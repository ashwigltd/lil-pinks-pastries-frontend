import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Gallery from "@browniebroke/gatsby-image-gallery"

// const InstagramGallery = ({ data }) => {
// const images = data.allInstaNode.edges.map(
//   ({ node }) => node.localFile.childImageSharp
// )
// `images` is an array of objects with `thumb` and `full`
// return <Gallery images={images} />
// }

// export const pageQuery = graphql`
//   query InstagramGalleryQuery {
//     allInstaNode {
//       edges {
//         node {
//           localFile {
//             absolutePath
//             childImageSharp {
//               thumb: gatsbyImageData(
//                 width: 270
//                 height: 270
//                 placeholder: BLURRED
//               )
//               full: gatsbyImageData(layout: FULL_WIDTH)
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default InstagramGallery

const InstagramGallery = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode {
        edges {
          node {
            localFile {
              absolutePath
              childImageSharp {
                thumb: gatsbyImageData(
                  width: 270
                  height: 270
                  placeholder: BLURRED
                )
                full: gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `)

  const images = data.allInstaNode.edges.map(
    ({ node }) => node.localFile.childImageSharp
  )

  return (
    <div>
      <h2>Instagram Gallery</h2>
      <div>
        <Gallery images={images}></Gallery>
      </div>
    </div>
  )
}

export default InstagramGallery
