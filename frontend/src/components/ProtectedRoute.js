import React from 'react';
import {useCookies} from "react-cookie";
import axios from "axios";
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({ component: Component, location, ...rest}) => {
  const [cookies] = useCookies(['auth-token']);
  const validateBaseUrl = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=";

  return (
    <div className="ProtectedRoute">
      <Route {...rest} render={
        (props) => {
          if (cookies['auth-token'] !== undefined &&
              cookies['auth-token'].id_token !== undefined &&
              axios.get(validateBaseUrl + cookies['auth-token'].id_token).then(() => {console.log("lol")})) {
            return <Component {...props} key={location.key}/>
          } else {
            return <Redirect to={
              {
                pathname: "/",
                state: {
                  from: props.location
                }
              }
            }/>
          }
        }
      } />
    </div>
  );
};

export default ProtectedRoute;