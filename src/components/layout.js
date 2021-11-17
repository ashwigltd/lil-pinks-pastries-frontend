import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

import "../css/typography.css"
import "@fontsource/style-script"

import { Squash as Hamburger } from "hamburger-react"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <div className="header">
          <div className="title">
            <h1
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
                to={location.pathname === blogPath ? `/blog/` : `/`}
              >
                {title}
              </Link>
            </h1>
          </div>
          <div className="menu">
            <Hamburger color="pink"></Hamburger>
          </div>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `'Style Script'`,
            marginTop: 0,
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
        </h3>
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
        <Footer>
          © {new Date().getFullYear()}, Made with Love by
          {` `}
          <a target="_blank" rel="noreferrer" href="https://ash.ashwigltd.com">
            Ash
          </a>
          &nbsp;at AshWig, Ltd.
        </Footer>
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
