import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import InstagramGallery from "../components/instagram"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Lil Pink's Pastries"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`bakery`, `denver`, `sweets`, `cakes`, `cakes`]}
        />
        <img
          style={{
            height: "250px",
          }}
          src="./assets/logo_original.png"
          alt="Logo"
        />
        <div>
          <h1 className="center">Local Denver Bakery</h1>
        </div>
        {/* Instagram Component */}
        {/* <div className="center">
          <InstagramGallery />
        </div> */}
        {/* End Instagram Component */}
      </Layout>
    )
  }
}

export default IndexPage
