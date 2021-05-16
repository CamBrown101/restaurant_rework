import React, { useState, useEffect } from "react";
import SlideTemplate from "../Carousel/SlideTemplate";
import CarouselButton from "../Carousel/CarouselButton";
import styled from "styled-components";
import drinkMenu1 from "../../images/menus/Riva-Menu-Food3.png";
import drinkMenu2 from "../../images/menus/Riva-Menu-Food4.png";
import drinkMenu3 from "../../images/menus/Riva-Menu-Wine1.png";
import drinkMenu4 from "../../images/menus/Riva-Menu-Wine1.png";
import drinkMenu5 from "../../images/menus/Riva-Menu-Wine2.png";
import drinkMenu6 from "../../images/menus/Riva-Menu-Wine3.png";
import drinkMenu7 from "../../images/menus/Riva-Menu-Wine4.png";

type Props = {
  interval: number;
  numberOfSlides: number;
};

const slideData = [
  {
    imageUrl: drinkMenu1,
  },
  {
    imageUrl: drinkMenu2,
  },
  {
    imageUrl: drinkMenu3,
  },
  {
    imageUrl: drinkMenu4,
  },
  {
    imageUrl: drinkMenu5,
  },
  {
    imageUrl: drinkMenu6,
  },
  {
    imageUrl: drinkMenu7,
  },
];

const slidesArray = slideData.map((slide, index) => {
  return (
    <SlideTemplate
      key={index}
      numberOfSlides={slideData.length}
      slide={index}
      image={imageUrl}
    />
  );
});

const Carousel = ({ interval, numberOfSlides }: Props) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide + 1 === numberOfSlides) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const previousSlide = () => {
    if (slide === 0) {
      setSlide(numberOfSlides - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, interval);
    return () => clearTimeout(timer);
  });

  return (
    <CarouselContainer>
      <CarouselContainerInner>
        {slidesArray[slide]}
        <ButtonContainer>
          <CarouselButton direction="previous" onClick={previousSlide} />
          <CarouselButton direction="next" onClick={nextSlide} />
        </ButtonContainer>
      </CarouselContainerInner>
    </CarouselContainer>
  );
};

// Styled Components

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

const CarouselContainerInner = styled.div`
  width: 90%;
  max-width: 1400px;
  position: relative;
`;

export default Carousel;
