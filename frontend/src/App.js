import './App.sass';
import {Route, BrowserRouter as Router, Switch, withRouter} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import CustomNavbar from "./components/CustomNavbar";

const App = withRouter(({ location }) => {
  return (
    <div className="App">
      {location.pathname !== "/" && <CustomNavbar />}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/project/:projectname" component={Project} />
        <Route exact path="/:username" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
});

export default App;
