import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import InstagramFeedViewer from "../components/instagram"

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
        <h1 class="center">Local Denver Bakery</h1>
        {/* Instagram Component */}
        {/* <InstagramFeedViewer /> */}
        {/* End Instagram Component */}
        <Link className="center" to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
        <Link className="center" to="/pricing/">
          <Button marginTop="35px">Go to Pricing</Button>
        </Link>
        <Link className="center" to="/contact/">
          <Button marginTop="35px">Go to Contact</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
