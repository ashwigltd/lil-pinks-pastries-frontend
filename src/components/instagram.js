import React from "react"
import { StaticQuery, graphql } from "gatsby"

const InstagramGallery = () => (
  <StaticQuery
    query={graphql`
      {
        allInstaNode {
          edges {
            node {
              id
              likes
              comments
              mediaType
              localFile {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div>
          {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
          <h2>Instagram Feed</h2>
          <p>{data.allInstaNode.edges}</p>
        </div>
      </div>
    )}
  ></StaticQuery>
)

export default InstagramGallery
