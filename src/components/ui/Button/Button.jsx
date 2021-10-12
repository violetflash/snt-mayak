import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  display: inline-block;
  margin: ${props => props.margin ? props.margin : 0};
  padding: ${props => props.padding ? props.padding : '5px 10px'};
  border-radius: 4px;
  font-size: 16px;
  width: ${props => props.width ? props.width : 'auto'};
  color: ${props => props.color ? props.color : 'var(--mainColor)'};
  background-color: ${props => props.bgColor ? props.bgColor : 'var(--buttonBgColor)'};
  border: 1px solid var(--mainColor);
  transition: all 0.3s;

  &:hover {
    background-color: ${props => {
     return props.deleteBtn ? 'var(--popupErrorMsgColor)' : 
             props.green ? 'var(--popupValidBgColor)' : 
                     props.onHover ? props.onHover : 'var(--buttonOnHoverColor)'
    }}
  }
  
  &:disabled {
    &:hover {
      background-color: var(--disabledButtonBg);
    }
  }
`;

export const Button = (
  { text,
    onClick,
    width = null,
    disabled = null,
    margin = null,
    color = null,
    padding = null,
    aria = null,
    deleteBtn = null,
    green = null,
    bgColor = null,
    onHover = null,
  }) => {
  return (
    <ButtonContainer
      onClick={onClick}
      color={color}
      padding={padding}
      margin={margin}
      disabled={disabled}
      width={width}
      aria-label={aria}
      deleteBtn={deleteBtn}
      green={green}
      bgColor={bgColor}
      onHover={onHover}
    >
      {text}
    </ButtonContainer>
  );
};
