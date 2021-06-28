import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";

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
