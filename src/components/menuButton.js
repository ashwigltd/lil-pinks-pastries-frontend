import React, { useState } from "react"
import { Squash as Hamburger } from "hamburger-react"
import { Button, Link } from "gatsby"

const MenuButton = () => {
  const [toggled, setToggled] = useState(false)

  const toggle = () => setToggled(!toggled)

  return (
    <div onClick={toggle}>
      <Hamburger color="pink" toggled={toggled} toggle={toggle} />
      {toggled && (
        <ul>
          {/* <li toggled={toggled} toggle={toggle}>
            <Link onClick={() => toggle(false)} to="/">
              Home
            </Link>
          </li> */}
          <li>
            <Link className="center" onClick={() => toggle(false)} to="/blog/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="center"
              onClick={() => toggle(false)}
              to="/pricing/"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className="center"
              onClick={() => toggle(false)}
              to="/contact/"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link className="center" onClick={() => toggle(false)} to="/blog/">
              Blog
            </Link>
          </li>
          {/* <li toggled={toggled} onClick={() => toggle(false)} toggle={toggle}>
            <Link className="center" to="/pricing/">
              <Button marginTop="35px">Go to Pricing</Button>
            </Link>
          </li>
          <li toggled={toggled} onClick={() => toggle(false)} toggle={toggle}>
            <Link className="center" to="/contact/">
              <Button marginTop="35px">Go to Contact</Button>
            </Link>
          </li> */}
        </ul>
      )}
    </div>
  )
}

export default MenuButton
