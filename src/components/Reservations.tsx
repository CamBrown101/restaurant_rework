import React from "react";
import styled from "styled-components";

const Reservations = () => {
  return (
    <ReservationsContainer>
      <ReservationsContainerInner>
        <p>Coming Soon</p>
      </ReservationsContainerInner>
    </ReservationsContainer>
  );
};

const ReservationsContainer = styled.header`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReservationsContainerInner = styled.div`
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

export default Reservations;
