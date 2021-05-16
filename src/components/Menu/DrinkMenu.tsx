import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel/Carousel";
import drinkMenu1 from "../../images/menus/Riva-Menu-Food3.png";
import drinkMenu2 from "../../images/menus/Riva-Menu-Food4.png";
import drinkMenu3 from "../../images/menus/Riva-Menu-Wine1.png";
import drinkMenu4 from "../../images/menus/Riva-Menu-Wine2.png";
import drinkMenu5 from "../../images/menus/Riva-Menu-Wine3.png";
import drinkMenu6 from "../../images/menus/Riva-Menu-Wine4.png";

const slideData = [
  {
    imageUrl: drinkMenu1,
    altText: "Riva cocktail menu",
  },
  {
    imageUrl: drinkMenu2,
    altText: "Riva beer and wine by the glass",
  },
  {
    imageUrl: drinkMenu3,
    altText: "Riva wine list",
  },
  {
    imageUrl: drinkMenu4,
    altText: "Riva wine list",
  },
  {
    imageUrl: drinkMenu5,
    altText: "Riva wine list",
  },
  {
    imageUrl: drinkMenu6,
    altText: "Riva wine list",
  },
];

const DrinkMenu = () => {
  return (
    <DrinkMenuWrapper>
      <DrinkMenuContainerInner>
        <Carousel interval={10000} numberOfSlides={6} data={slideData} />
      </DrinkMenuContainerInner>
    </DrinkMenuWrapper>
  );
};

export default DrinkMenu;

const DrinkMenuWrapper = styled.main`
  width: 100%;
  height: 700px;
  padding-top: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const DrinkMenuContainerInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
