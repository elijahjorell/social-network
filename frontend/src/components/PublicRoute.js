import React from 'react';
import {useCookies} from "react-cookie";
import axios from "axios";
import {Redirect, Route} from "react-router-dom";

const PublicRoute = ({ component: Component, to, location, ...rest}) => {
  const [cookies] = useCookies(['auth-token']);
  const validateBaseUrl = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=";

  return (
    <div className="Public">
      <Route {...rest} render={
        (props) => {
          if (cookies['auth-token'] !== undefined &&
            cookies['auth-token'].id_token !== undefined &&
            axios.get(validateBaseUrl + cookies['auth-token'].id_token)) {
            return <Redirect to={
              {
                pathname: to,
                state: {
                  from: props.location
                }
              }
            }/>
          } else {
            return <Component {...props} key={location.key}/>
          }
        }
      } />
    </div>
  );
};

export default PublicRoute;