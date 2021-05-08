import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <AboutContainerInner>
        <p className="about-content">
          Riva Sidney is a reimagining of the long-standing Beacon Landing
          Restaurant into a new Mediterranean dining experience for the people
          of Vancouver Island, and it’s visitors. With beautiful seascape views,
          a sweeping oceanfront patio combined with true Italian inspired menus
          and unpretentious service, Riva is an evolution of dining in Sidney.
        </p>
        <button>View Menu</button>
      </AboutContainerInner>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  background-color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  color: black;
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutContainerInner = styled.div`
  width: 70%;
  margin: 50px 0 20px 0;

  button {
    margin-bottom: 20px;
    margin-top: 30px;
    color: #fff;
    letter-spacing: 1px;
    font-family: "Raleway", sans-serif;
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

  .about-content {
    text-align: center;
    font-weight: 500;
    color: #b96140;
  }
`;

export default About;
