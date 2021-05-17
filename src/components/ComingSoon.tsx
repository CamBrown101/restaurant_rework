import React from "react";
import styled from "styled-components";

const ComingSoon = () => {
  return (
    <ComingSoonContainer>
      <ComingSoonContainerInner>
        <p>Coming Soon</p>
      </ComingSoonContainerInner>
    </ComingSoonContainer>
  );
};
export default ComingSoon;

const ComingSoonContainer = styled.header`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ComingSoonContainerInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #b96140;
    font-family: "Montecatini Pro Normale", sans-serif;
    font-weight: 900;
    font-size: 50px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
