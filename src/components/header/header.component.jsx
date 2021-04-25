import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Succourance</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/volunteer">volunteer</Link>
          </NavItem>
          <NavItem>
            <Link to="/call">Call Now!</Link>
          </NavItem>
        </Nav>
        <Button color="primary">Login/Sign Up</Button>{" "}
      </Navbar>
    </div>
  );
}

export default Header;
