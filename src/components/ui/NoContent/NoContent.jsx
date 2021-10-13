import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
  padding: 20px;
  text-align: center;
  box-shadow: rgba(9, 30, 66, 0.25) 0 1px 1px, rgba(9, 30, 66, 0.13) 0 0 1px 1px;
`;

export const NoContent = ({ children }) => {
  return <DivContainer>{children}</DivContainer>
};