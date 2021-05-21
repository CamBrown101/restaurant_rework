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

const Slide = ({ slide, numberOfSlides, image, alt }: Props) => {
  console.log(image);

  return (
    <SlideWrapper>
      <SlideInnerWrapper>
        <img src={image} alt="Riva's menu" />
      </SlideInnerWrapper>
      <CircleContainer>{createCircles(numberOfSlides, slide)}</CircleContainer>
    </SlideWrapper>
  );
};

//Styled Component

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 700px;
  width: 100%;
  color: white;
  background-color: white;

  img {
    width: 300px;
    height: auto;
  }
`;

type SlideProps = {
  imageUrl: string;
};
const SlideInnerWrapper: any = styled.div<SlideProps>`
  background-image: url(${(props) => props.imageUrl});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
  height: 100%;
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
    color: black;
  }
`;
export default Slide;
