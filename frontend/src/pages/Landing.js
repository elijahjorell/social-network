import React from 'react';
import LoginGoogle from "../components/LoginGoogle";
import SignupGoogle from "../components/SignupGoogle";
import PublicRoute from "../components/PublicRoute";

const Landing = () => {
  return (
    <div className="Landing">
      <SignupGoogle />
      <LoginGoogle />
      <PublicRoute />
    </div>
  );
};

export default Landing;