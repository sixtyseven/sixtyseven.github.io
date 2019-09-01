import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
// import SVGI from "./linked_in.svg"
import SVGI from "src/assets/images/glyphicons-social-18-linked-in.svg"
import styles from "./header_nav.module.scss"

interface IProps {
  siteTitle: string
}

const Header = ({ siteTitle }: IProps) => (
  <>
    <Navbar collapseOnSelect variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/skills">
            Skills
          </Nav.Link>
          <NavDropdown title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/contact_me">
              Contact Me
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Report a bug</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className={`pr-md-5 ${styles.contactIcons}`}>
          <SVGI />
        </div>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default Header
