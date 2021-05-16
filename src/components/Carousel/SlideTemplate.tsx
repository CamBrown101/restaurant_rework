import React from "react";
import styled from "styled-components";
import { CircleFill } from "@styled-icons/bootstrap/CircleFill";

type Props = {
  slide: number;
  numberOfSlides: number;
  image: string;
  alt: string;
};

const createCircles = (totalSlides: number, slideNumber: number) => {
  const arrayOfCircles: any[] = [];

  for (let i = 0; i < totalSlides; i++) {
    if (i === slideNumber) {
      arrayOfCircles.push(<CircleFill className="circle current" key={i} />);
    } else {
      arrayOfCircles.push(<CircleFill className="circle" key={i} />);
    }
  }
  return arrayOfCircles;
};

const People = ({ slide, numberOfSlides, image, alt }: Props) => {
  return (
    <SlideWrapper>
      <div className="slide-container">
        <img src={image} alt={alt} />
        <CircleContainer>
          {createCircles(numberOfSlides, slide)}
        </CircleContainer>
      </div>
    </SlideWrapper>
  );
};

//Styled Component

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  width: 100%;
  color: white;
  background-color: black;

  img {
    width: 300px;
    height: auto;
  }
  .slide-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 100%;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  flex-direction: initial;
  justify-content: center;
  margin-bottom: 20px;

  .circle {
    width: 10px;
    color: grey;
    margin-right: 10px;
  }
  .current {
    color: white;
  }
`;
export default People;
