import React from 'react';
import styled from 'styled-components';

const DateContainer = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  color: #000000;
  font-size: 16px;
`;

export const DateLabel = ({ date }) => {
  return (
    <DateContainer>{date}</DateContainer>
  )

};
