import React from 'react';
import styled from 'styled-components';
import leafs from '../../../assets/bg/leafsBig.svg';

const StyledLeafs = styled.div`
  position: absolute;
  top: -200px;
  right: 100px;
  transform: rotate(-50deg);
  width: 200px;
  height: 400px;
  background-image: url(${leafs});
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Leafs = () => {
  return <StyledLeafs/>
};
