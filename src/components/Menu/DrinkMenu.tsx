import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel/Carousel";

const DrinkMenu = () => {
  return (
    <DrinkMenuWrapper>
      <DrinkMenuContainerInner></DrinkMenuContainerInner>
    </DrinkMenuWrapper>
  );
};

export default DrinkMenu;

const DrinkMenuWrapper = styled.main`
  width: 100%;
  height: 700px;
  padding-top: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DrinkMenuContainerInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
