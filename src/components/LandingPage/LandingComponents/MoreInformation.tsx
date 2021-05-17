import React from "react";
import styled from "styled-components";
import barImage from "../../../images/bar.jpg";

const MoreInformation = () => {
  return (
    <MoreInfoWrapper>
      <div className="content">
        <h2>Private Dining</h2>
        <p>
          Parties of up to 10 guests may be seated in the private dinning room.
        </p>
        <button>Learn More</button>
      </div>
    </MoreInfoWrapper>
  );
};

const MoreInfoWrapper = styled.section`
  background-image: url(${barImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;

  button {
    margin-top: 30px;
    color: #fff;
    letter-spacing: 1px;
    font-family: "Forum", sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    background-color: #00a79d;
    padding: 9px 15px;
    text-transform: uppercase;
    cursor: pointer;
    border: 0;
    transition: background-color 0.8s;
    width: 200px;
  }
  button:hover {
    background-color: #b96140;
  }

  .content {
    color: #b96140;

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 50px;
      font-family: "Forum", sans-serif;
      margin: 0;
    }
    p {
      font-weight: 500;
      font-family: Josefin-sans, "sans-sarif";
      font-size: 30px;
    }

    height: 250px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 30px;
    margin-left: 100px;
    width: 600px;
    padding: 50px;
  }
`;

export default MoreInformation;
