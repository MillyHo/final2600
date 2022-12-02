import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Documentation from "./pages/Documentation";




function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/community" component={Community} />
          <Route path="/profile" component={Profile}/>
          <Route path="/documentation" component={Documentation}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
