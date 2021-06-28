import './App.sass';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        WORK ON GOOGLE AUTH NEXT
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/project/:projectname" component={Project} />
          <Route exact path="/:username" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
