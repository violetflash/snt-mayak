import React from 'react';
import styled from 'styled-components';
import { inputSharedStyles, LabelText } from "../sharedStyles";

const Label = styled.label`
  display: block;
  flex-basis: ${props => props.basis ? props.basis : 'auto'};
  width: 100%;
  font-size: 14px;
`;

const Input = styled.input`
  ${inputSharedStyles};
  margin: ${props => props.margin ? props.margin : '5px 0 20px'};
  padding: 0 15px;
  height: 40px;
`;


export const TextInput = (
  { label, value, onChange,
    name = null,
    placeholder = null,
    onBlur= null,
    focus = null,
    basis = null,
    margin = null,
  }) => {

  const labelText = label ? <LabelText popup>{label}:</LabelText> : null;

  if (name === 'date') {
    return (
      <Label basis={basis}>
        <LabelText popup fz="14px">Дата:</LabelText>
        <LabelText popup fz="12px">(ДД.ММ.ГГГГ)</LabelText>
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
        <LabelText popup fz="14px">Время:</LabelText>
        <LabelText popup fz="12px">(ЧЧ:ММ)</LabelText>
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
