import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import LogoutNavLink from "./LogoutNavLink";

const GlobalNavbar = () => {
  const authenticatedUserUsername = "elijahjorell";

  return (
    <div className="GlobalNavbar">
      <div className="GlobalNavbarContent">
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
    </div>
  );
};

export default GlobalNavbar;