import React from 'react';
import GoogleLogin from "react-google-login";
import {useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";

const LoginGoogle = () => {
  const history = useHistory();
  const [, setCookies] = useCookies(['auth-token'])

  const responseGoogle = (response) => {
    setCookies('auth-token', response.tokenObj);
    history.push("/home");
  };

  return (
    <div className="LoginGoogle">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default LoginGoogle;