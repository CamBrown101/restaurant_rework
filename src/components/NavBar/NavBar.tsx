import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavLogo from "../../images/Riva-Logo-Horizontal-Teal.png";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <NavLink className="nav-menu-item" id="nav-menu-home" exact to="/">
          <img className="logo" src={NavLogo} />
        </NavLink>
        <div className="nav-inner-container">
          <div className="nav-btns">
            <NavLink
              className="nav-menu-item"
              id="nav-menu-view-menu"
              exact
              to="/View-Menu">
              View Menu
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
    margin-top: 15px;
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

  #nav-menu-view-menu {
    color: #b96140;
    font-family: "Raleway", sans-serif;
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  #nav-menu-view-menu:hover {
    color: #00a79d;
  }
`;
