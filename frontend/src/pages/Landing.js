import React from 'react';
import LoginGoogle from "../components/LoginGoogle";
import SignupGoogle from "../components/SignupGoogle";

const Landing = () => {
  return (
    <div className="Landing">
      <SignupGoogle />
      <LoginGoogle />
    </div>
  );
};

export default Landing;