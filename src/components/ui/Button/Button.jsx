import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  margin: ${props => props.margin ? props.margin : 0};
  padding: ${props => props.padding ? props.padding : '5px 10px'};
  border-radius: 4px;
  font-size: 16px;
  width: ${props => props.width ? props.width : 'auto'};
  color: ${props => props.color ? props.color : 'var(--mainColor)'};
  background-color: var(--buttonBgColor);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accentColor);
  }
  
  &:disabled {
    
    &:hover {
      background-color: var(--disabledButtonBg);
    }
  }
`;




export const Button = ({ text, onClick, width = null, disabled = null, margin = null, color = null, padding = null }) => {
  return (
    <ButtonContainer
      onClick={onClick}
      color={color}
      padding={padding}
      margin={margin}
      disabled={disabled}
      width={width}>
      {text}
    </ButtonContainer>
  );
};
