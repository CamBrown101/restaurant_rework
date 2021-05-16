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
            <h3>Address</h3>
            <p className="adress">2537 Beacon Ave W #107, Sidney, BC V8L 1Y3</p>
            <a className="phone" href="tel:+1-250-656-6690">
              Phone Number - (250) 656-6690
            </a>
            <h3>Hours</h3>
            <p className="hours">Hours - Opens at 11am 7 days a week</p>
            <p className="copyright">
              ©{date.getFullYear()} Riva All Rights Reserved.
            </p>
          </div>
          <div className="site-links">
            <Link to="/View-Food-Menu">
              <button>View menu</button>
            </Link>
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
  padding-top: 40px;
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
`;

const TopFooterContainer = styled.div`
  background: black;
  padding-top: 20px;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .contact {
    display: flex;
    flex-direction: column;

    h3 {
      font-family: "Forum", sans-serif;
      font-weight: 900;
      font-size: 30px;
      margin-top: 20px;
      margin-bottom: 2px;
      color: white;
    }

    .copyright {
      color: #93969b;
      font-size: 16px;
      margin-top: 20px;
    }
    .adress,
    .phone,
    .hours {
      font-size: 20px;
      font-family: "Forum", sans-serif;
      margin: 2px;
    }
  }
  .site-links {
    margin-right: 150px;

    button {
      margin-bottom: 20px;
      margin-top: 30px;
      color: #fff;
      letter-spacing: 1px;
      font-family: "Forum", sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      background-color: #b96140;
      padding: 9px 15px;
      text-transform: uppercase;
      cursor: pointer;
      border: 0;
      transition: background-color 0.8s;
    }
    button:hover {
      background-color: #00a79d;
    }
  }
`;
