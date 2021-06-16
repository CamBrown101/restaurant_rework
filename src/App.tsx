import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import FoodMenu from "./components/Menu/FoodMenu";
import DrinkMenu from "./components/Menu/DrinkMenu";
import ComingSoon from "./components/ComingSoon";
import Reservations from "./components/Reservations";

function _ScrollToTop(props: any) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/View-Food-Menu" exact component={FoodMenu} />
          <Route path="/View-Drink-Menu" exact component={DrinkMenu} />
          <Route path="/Reservations" exact component={Reservations} />
          <Route path="/Order-Online" exact component={ComingSoon} />
        </Switch>
      </ScrollToTop>
      <NavBar />
    </Router>
  );
}

export default App;
