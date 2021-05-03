import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import WhyAcclamation from "./components/WhyAcclamation/WhyAcclamation";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/View-Menu" exact component={WhyAcclamation} />
      </Switch>
      <NavBar />
    </Router>
  );
}

export default App;
