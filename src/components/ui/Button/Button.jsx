import React from 'react';


export const Button = ({ text, onPush }) => {
  return (
    <button onClick={onPush}>
      {text}
    </button>
  );
};
