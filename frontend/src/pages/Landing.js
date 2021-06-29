import React from 'react';

const Landing = () => {
  return (
    <div className="Landing">
      Landing
      <br/>
      {process.env.REACT_APP_SECRET}
    </div>
  );
};

export default Landing;