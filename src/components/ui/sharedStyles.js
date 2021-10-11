import styled, { css } from 'styled-components';

export const inputSharedStyles = css`
  border-radius: 4px;
  border: 1px solid transparent;
  color: #fff;
  background-color: var(--inputsBgColor);
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
  font-size: ${props => props.fz ? props.fz : '14px'};
  color: ${props => props.popup ? 'var(--popupLabelTitle)' : 'inherit'};
`;

export const H2Title = styled.h2`
  display: block;
  margin: ${props => props.margin ? props.margin : 0};
  text-align: center;
  font-weight: 700;
  text-transform: ${props => props.tt ? props.tt : 'none'};
`;

export const H3Title = styled.h3`
  display: block;
  margin: ${props => props.margin ? props.margin : 0};
  text-align: center;
  font-weight: 700;
  text-transform: ${props => props.tt ? props.tt : 'none'};
`;

export const ParagraphText = styled.p`
  margin: ${props => props.margin ? props.margin : 0};
  text-align: ${props => props.ta ? props.ta : 'left'};
`;

export const Section = styled.section`
  margin: ${props => props.margin ? props.margin : 0};
  padding: ${props => props.padding ? props.padding : 0};;
  background-color: ${props => props.bgColor === 'alertsBg' ?  'var(--alertsSectionBgColor)' : 
          props.bgColor ? props.bgColor : 'none'};
`;
