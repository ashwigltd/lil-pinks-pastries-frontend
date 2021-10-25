import React from "react"
import InstagramFeed from "react-ig-feed"
import "react-ig-feed/dist/index.css"

const InstagramFeedViewer = () => {
  return (
    <InstagramFeed
      token={process.env.INSTAGRAM_USER_ACCESS_TOKEN}
      counter="6"
    />
  )
}

export default InstagramFeedViewer
