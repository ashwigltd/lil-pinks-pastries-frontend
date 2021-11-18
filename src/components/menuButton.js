/* eslint jsx-a11y/no-static-element-interactions: "off" */

import React, { useState } from "react"
import { Squash as Hamburger } from "hamburger-react"
import { Link } from "gatsby"

const MenuButton = () => {
  const [toggled, setToggled] = useState(false)

  const toggle = () => setToggled(!toggled)

  return (
    <div class="menu" onClick={toggle} onKeyDown={toggle}>
      <Hamburger color="pink" toggled={toggled} toggle={toggle} />
      {toggled && (
        <ul>
          <li>
            <Link
              className="center"
              onClick={() => toggle(false)}
              onKeyDown={() => toggle(false)}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="center"
              onClick={() => toggle(false)}
              onKeyDown={() => toggle(false)}
              to="/pricing/"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className="center"
              onClick={() => toggle(false)}
              onKeyDown={() => toggle(false)}
              to="/contact/"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="center"
              onClick={() => toggle(false)}
              onKeyDown={() => toggle(false)}
              to="/blog/"
            >
              Blog
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default MenuButton
