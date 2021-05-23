import React from "react";
import styled from "styled-components";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import { Mail } from "@styled-icons/icomoon/Mail";
import { Link } from "react-router-dom";

const date = new Date();

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <TopFooterContainer>
          <div className="contact">
            <h3>Address</h3>
            <a className="adress" href="https://g.page/Rivayyj?share">
              2537 Beacon Ave W #107, Sidney, BC V8L 1Y3
            </a>
            <a className="email" href="mailto:mailto:info@rivasidney.ca">
              Email - info@rivasidney.ca
            </a>
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
            <SocialIconWrapper>
              <a
                className="social-link"
                href="https://www.instagram.com/rivayyj/">
                <InstagramIcon className="social-icon" />
              </a>
              <a
                className="social-link"
                href="https://www.facebook.com/Rivayyj/">
                <FacebookIcon className="social-icon" />
              </a>
              <a className="social-link mail" href="mailto:info@rivasidney.ca">
                <MailIcon className="social-icon" />
              </a>
            </SocialIconWrapper>
          </div>
        </TopFooterContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.footer`
  background-color: white;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 70px;
  width: 90%;
  max-width: 1400px;
  background-color: white;
  color: black;
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
  background: white;
  padding-top: 20px;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .contact {
    display: flex;
    flex-direction: column;

    h3 {
      font-family: Josefin-sans, "sans-sarif";
      font-weight: 900;
      font-size: 30px;
      margin-top: 20px;
      margin-bottom: 2px;
      color: black;
    }

    .copyright {
      color: #93969b;
      font-size: 16px;
      margin-top: 20px;
    }
    .adress,
    .email,
    .phone,
    .hours {
      font-size: 20px;
      font-family: Josefin-sans, "sans-sarif";
      margin: 2px;
    }
    .adress:hover,
    .email:hover,
    .phone:hover {
      color: #00a79d;
    }
  }
  .site-links {
    margin-right: 150px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

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

    @media screen and (max-width: 700px) {
      margin-right: 50px;
    }
    @media screen and (max-width: 500px) {
      margin-right: 0;
      button {
        font-size: 20px;
        line-height: 20px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
