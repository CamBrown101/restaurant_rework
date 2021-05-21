import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <AboutContainerInner>
        <p className="about-content">
          Riva Sidney is a new Mediterranean dining experience for the people of
          Vancouver Island, and its visitors. With beautiful seascape views, a
          sweeping oceanfront patio combined with true Italian inspired menus
          and unpretentious service, Riva is an evolution of dining in Sidney.
        </p>
        <button>
          <Link to="/View-Food-Menu">View Menu</Link>
        </button>
      </AboutContainerInner>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  background-color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutContainerInner = styled.div`
  width: 70%;
  margin: 50px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #b96140;

  button {
    margin-bottom: 20px;
    margin-top: 30px;
    width: 30%;
    color: #fff;
    letter-spacing: 1px;
    font-family: "forum", sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    background-color: #00a79d;
    padding: 9px 15px;
    text-transform: uppercase;
    cursor: pointer;
    border: 0;
    transition: background-color 0.8s;
  }
  button:hover {
    background-color: #b96140;
  }
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    line-height: 32px;
    font-size: 24px;
    text-align: center;
  }

  .about-content {
    text-align: center;
    font-weight: 500;
    font-family: Josefin-sans, "sans-sarif";
  }
  @media screen and (max-width: 500px) {
    .about-content {
      font-size: 30px;
      line-height: 35px;
    }
    a {
      font-size: 20px;
      line-height: 20px;
    }
    button {
      font-size: 20px;
      line-height: 20px;
    }
  }
`;

export default About;
