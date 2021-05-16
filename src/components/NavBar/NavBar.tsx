import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavLogo from "../../images/Riva-Logo-Horizontal-FullColour.png";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <NavLink className="nav-menu-item" id="nav-menu-home" exact to="/">
          <img className="logo" src={NavLogo} alt="Riva teal logo" />
        </NavLink>
        <div className="nav-inner-container">
          <div className="nav-btns">
            <NavLink
              className="nav-menu-item"
              id="nav-menu-view-food"
              exact
              to="/View-Food-Menu">
              Food
            </NavLink>
            <NavLink
              className="nav-menu-item"
              id="nav-menu-view-drink"
              exact
              to="/View-Drink-Menu">
              Drink
            </NavLink>
            <NavLink
              className="nav-menu-item"
              id="reservations"
              exact
              to="/reservations">
              Reservations
            </NavLink>
            <NavLink
              className="nav-menu-item"
              id="order-online"
              exact
              to="/order-online">
              Order Online
            </NavLink>
          </div>
        </div>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
  top: 0;
  position: fixed;
`;

const NavBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 15px 2% 10px;
  background-color: white;
  color: white;
  width: 90%;

  .logo {
    height: 90px;
    padding-right: 20px;
    margin-right: 20px;
  }
  .nav-btns {
    display: flex;
    align-items: center;
  }
  .nav-inner-container {
    width: 100%;
    margin-right: 2%;
    display: flex;
    justify-content: space-between;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
    transition: color 0.8s;
  }

  .nav-menu-item {
    margin-right: 20px;
    color: #00a79d;
    font-family: "Montecatini Pro Normale", sans-serif;
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .nav-menu-item:hover {
    color: #b96140;
  }
`;
