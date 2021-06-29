import React from 'react';
import ProtectedRoute from "../components/ProtectedRoute";

const Home = () => {
  return (
    <div className="Home">
      <ProtectedRoute />
      Home
    </div>
  );
};

export default Home;