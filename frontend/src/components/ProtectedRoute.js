import React from 'react';
import CustNavbar from "./Navbar";

const ProtectedRoute = ({ component: Component, location, ...rest}) => {
  return (
    <div className="ProtectedRoute">
      <CustNavbar />
    </div>
  );
};

export default ProtectedRoute;