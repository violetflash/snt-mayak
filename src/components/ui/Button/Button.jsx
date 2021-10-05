import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  
`;




export const Button = ({ text, onPush }) => {
  return (
    <ButtonContainer onClick={onPush}>
      {text}
    </ButtonContainer>
  );
};
