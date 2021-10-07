import styled from 'styled-components';

const Label = styled.label`
  margin-bottom: 10px;
`;

const SelectElement = styled.select`
  padding: 2px 5px;
`;

const Text = styled.span`
  margin-right: 10px;
`;

export const Select = ({ optionsArray, onChange, value, labelText = null, name = null }) => {

  const options = optionsArray.map(el => <option key={el.value} value={el.value}>{el.text}</option>);
  const text = labelText ? <Text>{labelText}</Text> : null;

  return (
    <Label>
      {text}
      <SelectElement name={name} onChange={onChange} value={value}>
        {options}
      </SelectElement>
    </Label>
  );
};
