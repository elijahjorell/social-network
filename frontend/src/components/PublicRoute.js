import React from 'react';

const PublicRoute = ({ component: Component, location, ...rest}) => {
  return (
    <div className="PublicRoute">
      Public Route
    </div>
  );
};

export default PublicRoute;