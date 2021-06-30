import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import LogoutNavLink from "./LogoutNavLink";

const CustomNavbar = () => {
  const authenticatedUserUsername = "elijahjorell";

  return (
    <div className="CustomNavbar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/home">Social Network</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to={"/" + authenticatedUserUsername}>Profile</Nav.Link>
        </Nav>
        <Nav>
          <LogoutNavLink />
        </Nav>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;