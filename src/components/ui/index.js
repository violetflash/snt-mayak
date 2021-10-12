import styled from 'styled-components';
import {
  FontSizeProps,
  MarginProps,
  PaddingProps,
  TextBlockProps,
} from "./sharedStyles";

export const LabelText = styled.span`
  display: block;
  margin-left: 10px;
  ${FontSizeProps};
  color: ${props => props.popup ? 'var(--popupLabelTitle)' : 'inherit'};
`;

export const H2Title = styled.h2`
  ${TextBlockProps}
`;

export const H3Title = styled.h3`
  ${TextBlockProps}
`;

export const ParagraphText = styled.p`
  ${TextBlockProps}
`;

export const Section = styled.section`
  ${MarginProps};
  ${PaddingProps};
  background-color: ${props => props.bgColor === 'alertsBg' ?  'var(--alertsSectionBgColor)' :
  props.bgColor ? props.bgColor : 'none'};
`;

export const Div = styled.div`
  ${MarginProps};
  ${PaddingProps};
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${props => props.align ? props.align : 'auto'};
  justify-content: ${props => props.justify ? props.justify : 'auto'};
  ${MarginProps}
`;

export const Form = styled.form`
  
`;

export const PureLabel = styled.label`
  position: relative;
  ${MarginProps};
`;



export * from './SliderCarousel/SliderCarousel';
export * from './Button/Button';
export * from './PageTitle/PageTitle';
export * from './Select/Select';
export * from './Checkbox/Checkbox';
export * from './Accordion/Accordion';
export * from './AdminEditableListItem/AdminEditableListItem';
export * from './TextArea/TextArea';
export * from './TextInput/TextInput';
export * from './Popups/ConfirmDeletePopup/ConfirmDeletePopup';


