import styled, { css } from 'styled-components';
import { FlexContainer } from "../index";

const titleStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 15px;
  color: var(--pageTitleColor);
  font-family: var(--fontFamily3);
  text-transform: uppercase;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 2px;
    z-index: -1;
    background: var(--secondColorLight);
  }

  &::after {
    top: unset;
    bottom: 0;
  }
`;

const H1 = styled.h1`
  ${titleStyles}
`;

const H2 = styled.h2`
  ${titleStyles}
`;

const H3 = styled.h3`
  ${titleStyles}
`;

export const PageTitle = ({ tag, title, margin = "0 0 30px"}) => {
  const pageTitle = tag === "h1" ? <H1>{title}</H1> :
    tag === "h2" ? <H2>{title}</H2> :
      tag === "h3" ? <H3>{title}</H3> : null;
  return (
    <FlexContainer align="center" justify="center" margin={margin}>
      {pageTitle}
    </FlexContainer>
  );
};