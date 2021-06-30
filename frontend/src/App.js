import './App.sass';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import CustomNavbar from "./components/CustomNavbar";
import ProtectedRoute from "./components/ProtectedRoute";

const App = withRouter(({ location }) => {
  return (
    <div className="App">
      {location.pathname !== "/" && <CustomNavbar />}
      <Switch>
        <Route exact path="/" component={Landing} />
        <ProtectedRoute exact path="/home" component={Home} />
        <ProtectedRoute exact path="/project/:projectname" component={Project} />
        <ProtectedRoute exact path="/:username" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
});

export default App;
