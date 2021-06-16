import React from "react";
import styled from "styled-components";
import Footer from "./Footer/Footer";

const Reservations = () => {
  return (
    <div>
      <ReservationsContainer>
        <ReservationsContainerInner>
          <iframe
            title="reservation plugin"
            className="reservation-window"
            src="https://www.opentable.ca/r/riva-reservations-sidney?restref=324484&lang=en-CA&ot_source=Restaurant%20website"></iframe>
        </ReservationsContainerInner>
      </ReservationsContainer>
      <Footer />
    </div>
  );
};

const ReservationsContainer = styled.header`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReservationsContainerInner = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .reservation-window {
    margin-top: 100px;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export default Reservations;
