import React from "react";
import styled from "styled-components";

type Props = {
  name: string;
  image: string;
};

const Menu = ({ name, image }: Props) => {
  return (
    <div>
      <p>{name} Menu</p>
    </div>
  );
};

export default Menu;
