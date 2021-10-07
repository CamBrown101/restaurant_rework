import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import { Mail } from "@styled-icons/icomoon/Mail";
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
              to="/View-Food-Menu"
            >
              Food
            </NavLink>
            <NavLink
              className="nav-menu-item"
              id="nav-menu-view-drink"
              exact
              to="/View-Drink-Menu"
            >
              Drink
            </NavLink>
            <NavLink
              className="nav-menu-item"
              id="reservations"
              exact
              to="/Reservations"
            >
              Reservations
            </NavLink>
            <NavLink
              className="nav-menu-item"
              id="order-online"
              exact
              to="/Order-Online"
            >
              Order Online
            </NavLink>
            <NavLink
              className="nav-menu-item"
              id="takeout-menu"
              to="Riva-Menu-Takeout_002.pdf"
              target="_blank"
              download
            >
              Takeout Menu
            </NavLink>
          </div>
        </div>
        <SocialIconWrapper>
          <a className="social-link" href="https://www.instagram.com/rivayyj/">
            <InstagramIcon className="social-icon" />
          </a>
          <a className="social-link" href="https://www.facebook.com/Rivayyj/">
            <FacebookIcon className="social-icon" />
          </a>
          <a className="social-link mail" href="mailto:info@rivasidney.ca">
            <MailIcon className="social-icon" />
          </a>
        </SocialIconWrapper>
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

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const NavBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 15px 2% 10px;
  background-color: white;
  color: #00a79d;
  width: 90%;

  .logo {
    height: 90px;
    margin-right: 10px;
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
  a:visited,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
    transition: color 0.8s;
  }
  a:hover {
    color: #b96140;
  }

  .nav-menu-item {
    margin-right: 20px;
    color: #00a79d;
    font-family: "Montecatini Pro Normale", sans-serif;
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
  }
  .nav-menu-item:hover {
    color: #b96140;
  }
  @media screen and (max-width: 975px) {
    .nav-menu-item {
      font-size: 20px;
      margin-right: 15px;
    }
    padding-right: 15px;
    margin-right: 20px;
  }
  @media screen and (max-width: 770px) {
    .nav-menu-item {
      font-size: 15px;
      margin-right: 10px;
    }
    .logo {
      height: 70px;
      padding-right: 10px;
      margin-right: 0px;
    }
  }
  @media screen and (max-width: 580px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 100%;
    padding-bottom: 10px;

    .nav-menu-item {
      font-size: 15px;
      margin-right: 10px;
    }
    .logo {
      height: 80px;
      margin-bottom: 10px;
    }
    .nav-btns {
      display: flex;
      align-items: center;
      margin-left: 5%;
    }
    .nav-inner-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  height: 70px;

  .social-icon {
    color: #00a79d;
    transition: color 0.8s;
  }
  .social-icon:hover {
    color: #b96140;
  }

  .social-link {
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mail {
    margin-left: 6px;
  }
  @media screen and (max-width: 1100px) {
    .social-link {
      height: 60%;
    }
  }
  @media screen and (max-width: 1035px) {
    .social-link {
      height: 50%;
    }
  }
  @media screen and (max-width: 580px) {
    .social-link {
      height: 60%;
    }
  }
`;

const InstagramIcon = styled(InstagramAlt)`
  height: 100%;
`;
const FacebookIcon = styled(Facebook)`
  height: 80%;
`;
const MailIcon = styled(Mail)`
  height: 75%;
`;
