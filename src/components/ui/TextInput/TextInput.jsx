import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  width: 100%;
  margin: ${props => props.margin + 'px'};
`;

const Input = styled.input`
  margin: 5px 0 20px;
  padding: 0 15px;
  width: 100%;
  height: 40px;
  background-color: #0d1221;
  border-radius: 2px;
  border: 1px solid transparent;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #98c3e8;
  }
`;

const LabelText = styled.span`
  margin-left: 10px;
`;


const TextInput = ({ label, onChange, placeholder = null, onBlur= null }) => {

  const labelText = label ? <LabelText>{label}</LabelText> : null;

  return (
    <Label>
      {labelText}
      <Input type="text" placeholder={placeholder} onChange={onChange} onBlur={onBlur}/>
    </Label>
  )
};

export default TextInput;