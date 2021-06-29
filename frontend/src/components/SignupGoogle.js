import React from 'react';
import GoogleLogin from "react-google-login";
import {useHistory} from "react-router-dom";

const SignupGoogle = () => {
  const history = useHistory();

  const responseGoogle = response => {
    console.log(response);
    history.push("/home");
  };

  return (
    <div className="SignupGoogle">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Signup with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default SignupGoogle;