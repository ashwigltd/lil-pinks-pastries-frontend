import React from "react"
import { StaticQuery, graphql } from "gatsby"

const InstagramGallery = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query InstagramGalleryQuery {
          allInstaNode(filter: { mediaType: { eq: "IMAGE" } }) {
            edges {
              node {
                id
                }
              }
            }
          }
        }
      `}

      render={data => (
        <div>
          <h2>Instagram Feed</h2>
          <p>{data.allInstaNode.edges.node.permalink}</p>
        </div>
      });
    } />

