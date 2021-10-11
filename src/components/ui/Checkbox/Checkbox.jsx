import styled from 'styled-components';

const Label = styled.label`
`;

const Text = styled.span`
  margin-right: 10px;
`;

const CheckBoxElement = styled.input`

`;

export const Checkbox = ({ name, onChange, checked, labelText = null }) => {
  const text = labelText ? <Text>{labelText}</Text> : null;

  return (
    <Label>
      {text}
      <CheckBoxElement type="checkbox" name={name} onChange={onChange} checked={checked}/>
    </Label>
  );
};

export default Checkbox;
