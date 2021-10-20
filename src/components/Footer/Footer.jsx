import React from 'react';
import {FooterContainer, FooterContent, GirlWrapper} from "./styles";
import GardenerGirl from "../Parallax/GardenerGirl/GardenerGirl";
import {Bush} from "./Bush/Bush";

const Footer = ({ num }) => {
  const position = num % 2 === 0 ? 'left' : 'right';
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <Bush/>
          <GirlWrapper position={position}>
            <GardenerGirl/>
          </GirlWrapper>
        </FooterContent>
      </div>
    </FooterContainer>
  )

};

export default Footer;