import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Project from "./pages/project";
import NotFound from "./pages/not-found";
import Landing from "./pages/landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/project/:projectname" component={Project} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
