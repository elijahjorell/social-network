import React from 'react';
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";
import {useCookies} from "react-cookie";

const LogoutNavLink = () => {
  const [,, removeCookie] = useCookies(['auth-token']);

  const handleLogout = () => {
    removeCookie('auth-token');
  }

  return (
    <div className="LogoutNavLink">
      <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
    </div>
  );
};

export default LogoutNavLink;