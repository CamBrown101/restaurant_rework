import React, { useState } from "react";
import SlideTemplate from "../Carousel/SlideTemplate";
import CarouselButton from "../Carousel/CarouselButton";
import styled from "styled-components";

type Props = {
  interval: number;
  numberOfSlides: number;
  data: any[];
};

const Carousel = ({ interval, numberOfSlides, data }: Props) => {
  const slidesArray = data.map((slide, index) => {
    return (
      <SlideTemplate
        key={index}
        numberOfSlides={data.length}
        slide={index}
        image={slide.imageUrl}
        alt={slide.altText}
      />
    );
  });
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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     nextSlide();
  //   }, interval);
  //   return () => clearTimeout(timer);
  // });

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
  top: 24%;
  width: 100%;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
`;

const CarouselContainerInner = styled.div`
  width: 90%;
  max-width: 1400px;
  position: relative;
`;

export default Carousel;
