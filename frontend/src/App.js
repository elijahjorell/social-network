import './App.sass';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import GlobalNavbar from "./components/GlobalNavbar";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const App = withRouter(({ location }) => {
  return (
    <div className="App">
      {location.pathname !== "/" && <GlobalNavbar />}
      <Switch>
        <PublicRoute exact path="/" to="/home" component={Landing} />
        <ProtectedRoute exact path="/home" component={Home} />
        <ProtectedRoute exact path="/:username" component={Profile} />
        <ProtectedRoute exact path="/:username/:projectname" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
});

export default App;
