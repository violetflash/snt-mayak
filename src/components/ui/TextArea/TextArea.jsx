import styled from 'styled-components';
import { inputSharedStyles } from "../sharedStyles";
import React from "react";
import { LabelText } from "../index";

const Label = styled.label`
  width: 100%;
`;

const TextAreaContainer = styled.textarea`
  display: block;
  ${inputSharedStyles};
  margin: ${props => props.margin ? props.margin : 0};
  padding: 5px 15px;
  max-height: 100px;
  min-height: 80px;
  resize: vertical;
`;

export const TextArea = (
  {value, onChange,
    onBlur = null, name = null, label = null , margin = null}) => {
  const labelText = label ? <LabelText popup>{label}:</LabelText> : null;

  return (
    <Label>
      {labelText}
      <TextAreaContainer name={name} value={value} onChange={onChange} onBlur={onBlur} margin={margin}/>
    </Label>
  )
};

export default TextArea;
