import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import FoodMenu from "./components/Menu/FoodMenu";
import DrinkMenu from "./components/Menu/DrinkMenu";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/View-Food-Menu" exact component={FoodMenu} />
        <Route path="/View-Drink-Menu" exact component={DrinkMenu} />
        <Route path="/Reservations" exact component={LandingPage} />
        <Route path="/Order-Online" exact component={LandingPage} />
      </Switch>
      <NavBar />
    </Router>
  );
}

export default App;
