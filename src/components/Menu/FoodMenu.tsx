import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel/Carousel";
import FoodMenu1 from "../../images/menus/Riva-Menu-Food1.png";
import FoodMenu2 from "../../images/menus/Riva-Menu-Food2.png";
import FoodMenu3 from "../../images/menus/Riva-Menu-Dessert.png";

const slideData = [
  {
    imageUrl: FoodMenu1,
    altText: "Riva food menu",
  },
  {
    imageUrl: FoodMenu2,
    altText: "Riva food menu",
  },
  {
    imageUrl: FoodMenu3,
    altText: "Riva food menu",
  },
];

const FoodMenu = () => {
  return (
    <FoodMenuWrapper>
      <FoodMenuContainerInner>
        <Carousel interval={10000} numberOfSlides={3} data={slideData} />
      </FoodMenuContainerInner>
    </FoodMenuWrapper>
  );
};

export default FoodMenu;

const FoodMenuWrapper = styled.main`
  width: auto;
  height: 100%;
  padding-top: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const FoodMenuContainerInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
