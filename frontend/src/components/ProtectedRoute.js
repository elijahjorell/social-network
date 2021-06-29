import React from 'react';
import {useCookies} from "react-cookie";
import axios from "axios";
import {useHistory} from "react-router-dom";

const ProtectedRoute = ({ component: Component, location, ...rest}) => {
  const history = useHistory();
  const [cookies] = useCookies(['auth-token']);

  if (cookies['auth-token'] === undefined) {
    history.push("/");
  } else {
    if (cookies['auth-token'].id_token === undefined) {
      history.push("/");
    } else {
      const validateUrl = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${cookies['auth-token'].id_token}`;
      axios.get(validateUrl).catch(() => {
        history.push("/");
      });
    }
  }

  return (
    <div className="ProtectedRoute">
      Protected Route
    </div>
  );
};

export default ProtectedRoute;