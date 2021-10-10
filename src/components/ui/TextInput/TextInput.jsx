import React from 'react';
import styled from 'styled-components';
import { inputSharedStyles, LabelText } from "../sharedStyles";

const Label = styled.label`
  display: block;
  flex-basis: ${props => props.basis ? props.basis : 'auto'};
  width: 100%;
  margin: ${props => props.margin ? props.margin + 'px' : 0};
`;

const Input = styled.input`
  ${inputSharedStyles};
  margin: ${props => props.margin ? props.margin + 'px' : '5px 0 20px'};
  padding: 0 15px;
  height: 40px;
`;

const DateTime = styled.span`
  margin-left: 10px;
  font-size: 12px;
`;




export const TextInput = (
  { label, value, onChange,
    name = null,
    placeholder = null,
    onBlur= null,
    focus = null,
    basis = null,
    margin = null
  }) => {

  const labelText = label ? <LabelText>{label}:</LabelText> : null;

  if (name === 'date') {
    return (
      <Label basis={basis}>
        <LabelText>Дата:</LabelText>
        <DateTime>(ДД.ММ.ГГГГ)</DateTime>
        <Input
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          autoFocus={focus}
          margin={margin}
        />
      </Label>
    )
  }

  if (name === 'time') {
    return (
      <Label basis={basis}>
        <LabelText>Время:</LabelText>
        <DateTime>(ЧЧ:ММ)</DateTime>
        <Input
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          autoFocus={focus}
          margin={margin}
        />
      </Label>
    )
  }

  return (
    <Label>
      {labelText}
      <Input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        autoFocus={focus}
        margin={margin}
      />
    </Label>
  )
};

export default TextInput;