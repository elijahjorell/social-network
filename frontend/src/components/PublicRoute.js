import React from 'react';
import {useCookies} from "react-cookie";
import axios from "axios";
import {useHistory} from "react-router-dom";

const PublicRoute = ({ component: Component, location, ...rest}) => {
  const history = useHistory();
  const [cookies] = useCookies(['auth-token']);

  if (cookies['auth-token'] !== undefined) {
    if (cookies['auth-token'].id_token !== undefined) {
      const validateUrl = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${cookies['auth-token'].id_token}`;
      axios.get(validateUrl).then((res) => {
        if (res.status === 200) {
          history.push("/home");
        }
      });
    }
  }

  return (
    <div className="PublicRoute">
      Public Route
    </div>
  );
};

export default PublicRoute;