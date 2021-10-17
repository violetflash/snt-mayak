import React from 'react';
import styled from 'styled-components';
import { TextBlockProps } from "../sharedStyles";

const BadgeContainer = styled.span`
  ${TextBlockProps};
`;

export const Badge = (
  {text, bgColor = null, fz = null, fw = null, padding = null, margin = null, display = null}
) => {
  return (
    <BadgeContainer
      bgColor={bgColor}
      fz={fz}
      fw={fw}
      padding={padding}
      margin={margin}
      display={display}
    >
      {text}
    </BadgeContainer>
  )

};
