import React from 'react';
import styled from 'styled-components';

const BadgeContainer = styled.span`
  padding: 10px;
  border-radius: 4px;
  background-color: #e0dcb0;
  color: #000000;
  font-size: 16px;
`;

export const Badge = ({ date }) => {
  return (
    <BadgeContainer>{date}</BadgeContainer>
  )

};
