import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

import "../css/typography.css"
import "@fontsource/style-script"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

import { Squash as Hamburger } from "hamburger-react"
// import { pushRotate as Menu } from "react-burger-menu"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    let hamburgerMenu = (
      <div className="menu">
        <Hamburger color="pink"></Hamburger>
      </div>
    )

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <div className="header">
          <div className="title">
            <h1
              className="title"
              style={{
                ...scale(1.5),
                marginBottom: rhythm(1.5),
                marginTop: 0,
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {title}
              </Link>
            </h1>
          </div>
          <div className="menu">{hamburgerMenu}</div>
        </div>
      )
    } else {
      header = (
        <div className="header">
          <div className="title">
            <h1
              className="title"
              style={{
                fontFamily: `'Style Script'`,
                marginTop: 0,
                marginBottom: rhythm(1.5),
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/blog/`}
              >
                {title}
              </Link>
            </h1>
          </div>
          {hamburgerMenu}
        </div>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>

        {/* ---- BEGIN: FOOTER ---- */}
        <Footer>
          © {new Date().getFullYear()}, Made with &nbsp;
          <FontAwesomeIcon
            style={{ color: `pink` }}
            icon={faHeart}
          /> &nbsp;by{" "}
          <a
            className="ashLink personalPage"
            target="_blank"
            rel="noreferrer"
            href="https://ash.ashwigltd.com"
          >
            Ash
          </a>{" "}
          at{" "}
          <a
            className="ashLink"
            target="_blank"
            rel="noreferrer"
            href="https://cannalysis.ashwigltd.com"
          >
            AshWig, Ltd.
          </a>
        </Footer>
        {/* ---- END: FOOTER ---- */}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
