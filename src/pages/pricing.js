import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class PricingPage extends React.Component {
  render() {
    const siteTitle = "Lil Pink's Pastries"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Pricing"
          keywords={[`bakery`, `denver`, `sweets`, `cakes`, `cakes`]}
        />
        <h1 className="center">Pricing Information</h1>
        {/* Cake Pricing */}
        <h3 className="center">Cake Pricing</h3>
        <img src="../assets/cakePricing.jpg" alt="" />
        {/* Serving Size Information */}
        <Button className="center">Cake Serving Size Information</Button>
        {/* End Serving Size Information */}
        <br></br>
        {/* End Cake Pricing */}
        {/* Misc Pricing */}
        <h3 className="center">Additional Pricing</h3>
        <img src="../assets/additionalPricing.jpg" alt="" />
        {/* End Misc Pricing */}
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            <Link className="center" to="/">
              <Button marginTop="35px">Go to Home</Button>
            </Link>
          </li>
          <li>
            <Link className="center" to="/blog/">
              <Button marginTop="35px">Go to Blog</Button>
            </Link>
          </li>
          <li>
            <Link className="center" to="/contact/">
              <Button marginTop="35px">Go to Contact</Button>
            </Link>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default PricingPage
