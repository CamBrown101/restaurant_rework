import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import WhyAcclamation from "./components/WhyAcclamation/WhyAcclamation";
import HowWeWork from "./components/LandingPage/LandingComponents/HowWeWork/HowWeWork";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

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
