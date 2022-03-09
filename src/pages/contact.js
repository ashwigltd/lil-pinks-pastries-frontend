import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import ContactForm from "../components/contactForm"

class ContactPage extends React.Component {
  render() {
    const siteTitle = "Lil Pink's Pastries"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Contact"
          keywords={[`bakery`, `denver`, `sweets`, `cakes`, `cakes`]}
        />
        {/* ---- Page Header ---- */}
        <img
          // className="logo"
          style={{
            height: "250px",
          }}
          src="../assets/logo_original.png"
          alt="Logo"
        />
        <h1 className="center">Contact Us</h1>
        {/* ---- End Page Header ---- */}
        <ContactForm />
        {/* ---- Contact Form ---- */}
        {/* ---- End Contact Form ---- */}

        {/*  ---- Navigation Buttons ---- */}
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
            <Link className="center" to="/pricing/">
              <Button marginTop="35px">Go to Pricing</Button>
            </Link>
          </li>
        </ul>
        {/* ---- End Navigation Buttons ---- */}
      </Layout>
    )
  }
}

export default ContactPage
