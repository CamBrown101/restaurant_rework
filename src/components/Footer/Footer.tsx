import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const date = new Date();

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <TopFooterContainer>
          <div className="contact">
            <h3>Riva</h3>
            <p className="hours">Hours - Opens at 11am 7 days a week</p>
            <a className="phone" href="tel:+1-250-656-6690">
              Phone Number - (250) 656-6690
            </a>
            <p className="copyright">
              ©{date.getFullYear()} Riva All Rights Reserved.
            </p>
          </div>
          <div className="site-links">
            <Link to="/View-Menu">View Menu</Link>
          </div>
        </TopFooterContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.footer`
  background-color: black;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  width: 90%;
  max-width: 1400px;
  background-color: black;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  .logo {
    height: 75px;
    filter: invert(15%) sepia(6%) saturate(1341%) hue-rotate(353deg)
      brightness(83%) contrast(84%);
  }
`;

const TopFooterContainer = styled.div`
  background: black;
  padding-top: 50px;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;

  .contact {
    display: flex;
    flex-direction: column;
    h3 {
      font-family: "Quentin", sans-serif;
      font-size: 25px;
      margin: 3px;
      color: white;
    }
    p {
      font-family: "Work Sans", sans-serif;
      margin: 2px;
    }
    .copyright {
      margin-top: 21px;
      color: #93969b;
      font-size: 13px;
    }
    .email,
    .phone {
      font-size: 13px;
    }
    .email {
      color: #b09a7f;
    }
  }

  .site-links,
  .contact-us {
    display: flex;
    flex-direction: column;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    color: #b09a7f;
    font-weight: 900;
    margin-top: 90px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .site-links {
    text-align: center;
  }
  .contact-us {
    text-align: right;
    margin-right: 2%;
    h4 {
      margin: 0;
    }
    a {
      color: white;
    }
  }
`;
