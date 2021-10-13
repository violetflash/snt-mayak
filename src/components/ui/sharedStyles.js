import { css } from 'styled-components';

export const MarginProps = css`
  margin: ${props => props.margin ? props.margin : 0};
`;

export const PaddingProps = css`
  padding: ${props => props.padding ? props.padding : 0};
`;

export const TextAlignProps = css`
  text-align: ${props => props.align ? props.align : 'left'};
`;

export const FontSizeProps = css`
  font-size: ${props => props.fz ? props.fz : 'var(--defaultFontSize)'};
`;

export const TextTransformProps = css`
  text-transform: ${props => props.tt ? props.tt : 'none'};
`;

export const FontWeightProps = css`
  font-size: ${props => props.fw ? props.fw : '400'};
`;

export const DisplayProps = css`
  display: ${props => props.display ? props.display : "revert"};
`;

export const TransitionProps = css`
  transition: ${props => props.transition ? props.transition : 'none'};
`;

export const BlockElementProps = css`
  ${MarginProps};
  ${PaddingProps};
`;

export const TextBlockProps = css`
  ${DisplayProps};
  ${MarginProps};
  ${TextAlignProps};
  ${TextTransformProps}
  ${FontSizeProps}
  ${FontWeightProps};
  ${TransitionProps}
`;


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

