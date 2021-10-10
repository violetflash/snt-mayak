import styled from 'styled-components';
import { inputSharedStyles, LabelText } from "../sharedStyles";
import React from "react";

const TextAreaContainer = styled.textarea`
  ${inputSharedStyles};
  padding: 5px 15px;
  max-height: 100px;
  min-height: 80px;
  resize: vertical;
`;

const Label = styled.label`
  width: 100%;
`;

export const TextArea = (
  {value, onChange,
    onBlur = null, name = null, label = null }) => {
  const labelText = label ? <LabelText>{label}:</LabelText> : null;

  return (
    <Label>
      {labelText}
      <TextAreaContainer name={name} value={value} onChange={onChange} onBlur={onBlur}/>
    </Label>
  )
};

export default TextArea;