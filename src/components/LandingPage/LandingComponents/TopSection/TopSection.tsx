import React from "react";
import styled from "styled-components";
import bayView2 from "../../../../images/heroImage002.png";

const HomePage = () => {
  return (
    <AboutContainer>
      <AboutContainerInner>
        <img src={bayView2} alt="Redifing Waterfront Dining" />
      </AboutContainerInner>
    </AboutContainer>
  );
};
export default HomePage;

const AboutContainer = styled.header`
  width: 100%;
  height: 100%;
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutContainerInner = styled.div`
  /* background-image: url(${bayView2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`;
