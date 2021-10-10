import styled, { css } from 'styled-components';

export const inputSharedStyles = css`
  border-radius: 4px;
  border: 1px solid transparent;
  color: #fff;
  background-color: #0d1221;
  width: 100%;
  font-size: 16px;
  font-family: var(--fontFamily);
  outline: transparent;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: var(--inputFocusColor);
  }
`;

export const LabelText = styled.span`
  display: block;
  margin-left: 10px;
`;