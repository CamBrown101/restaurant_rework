import React from "react";
import styled from "styled-components";
import bayView from "../../../../images/heroImage001.jpg";
import fullColorLogo from "../../../../images/Riva-Icon-FullColour-trimmed.png";

const HomePage = () => {
  return (
    <AboutContainer>
      <AboutContainerInner>
        {/* <img className="logo" src={fullColorLogo} alt="Riva logo" /> */}
      </AboutContainerInner>
    </AboutContainer>
  );
};
export default HomePage;

const AboutContainer = styled.header`
  width: 100%;
  height: 700px;
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutContainerInner = styled.div`
  background-image: url(${bayView});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    background-color: rgba(255, 255, 255, 0.65);
    height: 60%;
    width: auto;
    padding: 20px;
  }
`;
