import React from 'react';
import {FooterContainer, FooterContent, GirlWrapper} from "./styles";
import GardenerGirl from "../Parallax/GardenerGirl/GardenerGirl";

const Footer = ({ num }) => {
  const position = num % 2 === 0 ? 'left' : 'right';
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <GirlWrapper position={position}>
            <GardenerGirl/>
          </GirlWrapper>
        </FooterContent>
      </div>
    </FooterContainer>
  )

};

export default Footer;