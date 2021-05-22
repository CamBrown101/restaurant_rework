import React from "react";
import TopSection from "./LandingComponents/TopSection/TopSection";
import About from "./LandingComponents/About";
import Carousel from "../Carousel/CarouselLandingPage";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import carpaccioImage from "../../images/landingpageimages/RivaCarpaccio001.png";
import drinksImage from "../../images/landingpageimages/RivaDrinksPatio001.png";
import foccaciaImage from "../../images/landingpageimages/RivaFoccacia001.png";
import negroniImage from "../../images/landingpageimages/RivaNegroni001.png";
import saladImage from "../../images/landingpageimages/RivaSalad001.png";
import calamariImage from "../../images/landingpageimages/RivaCalamari001.png";
import SeafoodPastaImage from "../../images/landingpageimages/RivaSeafoodPasta.png";
import ChickenPasta from "../../images/landingpageimages/RivaChickenPasta.png";

const carouselImages = [
  {
    imageUrl: carpaccioImage,
    altText: "Riva Carpaccio",
  },
  {
    imageUrl: drinksImage,
    altText: "Riva Drink",
  },
  {
    imageUrl: foccaciaImage,
    altText: "Riva Foccacia",
  },
  {
    imageUrl: negroniImage,
    altText: "Riva Negroni",
  },
  {
    imageUrl: saladImage,
    altText: "Riva Salad",
  },
  {
    imageUrl: calamariImage,
    altText: "Riva Calamari",
  },
  {
    imageUrl: SeafoodPastaImage,
    altText: "Riva Seafood Pasta",
  },
  {
    imageUrl: ChickenPasta,
    altText: "Riva Chicken Pasta",
  },
];

const LandingPage = () => {
  return (
    <Wrapper>
      <TopSection />
      <About />
      <Carousel
        interval={8000}
        numberOfSlides={carouselImages.length}
        data={carouselImages}
      />
      <Footer />
    </Wrapper>
  );
};

// const red = `#B96140`;
// const blue = `#00A79D`;
// const black = `#000000`;
// const white = `#FFFFFF`;
const Wrapper = styled.div`
  font-family: "Work Sans", sans-serif;
  max-width: 100%;
`;

export default LandingPage;
