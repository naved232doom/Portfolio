import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaHome,
  FaGoodreadsG,
} from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <FaHome></FaHome>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://www.goodreads.com/user/show/53326074-naved-sohail">
              <FaGoodreadsG></FaGoodreadsG>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/navsohail32">
              <FaFacebookF></FaFacebookF>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/naved-sohail-145754192/">
              <FaLinkedinIn></FaLinkedinIn>
            </Nav.Link>
            <Nav.Link href="https://github.com/naved232doom">
              <FaGithub></FaGithub>
            </Nav.Link>
            <Nav.Link href="https://codeforces.com/profile/ustadji">
              <SiCodeforces></SiCodeforces>
            </Nav.Link>
            {/* <NavDropdown title="Social" id="collasible-nav-dropdown">
        <NavDropdown.Item href="">
        <FaFacebookF></FaFacebookF>
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><FaLinkedinIn></FaLinkedinIn></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><FaGithub></FaGithub></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"><SiCodeforces></SiCodeforces></NavDropdown.Item>
      </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="Books">Books</Nav.Link>
            <Nav.Link href="Projects">Projects</Nav.Link>
            <Nav.Link href="Hobbies">Hobbies</Nav.Link>
            <Nav.Link href="Academics">Academics</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
