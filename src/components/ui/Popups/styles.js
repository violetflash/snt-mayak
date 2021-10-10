import styled from 'styled-components';

export const PopupContainer = styled.div`
  
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const AdminPopup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 60px auto 0;
  border-radius: 4px;
  z-index: 15;
  padding: 45px 20px;
  width: 100%;
  max-width: 360px;
  color: #fff;
  background-color: #171d30;
`;

export const ClosePopup = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  border-radius: 4px;
  width: 34px;
  height: 34px;
  background-color: rgba(68, 83, 126, 0.5);
  transition: all 0.3s ease 0s;
  z-index: 10;

  &:hover {
    background-color: rgba(68, 83, 126, 0.7);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    right: 7px;
    top: 16px;
    width: 20px;
    height: 2px;
    background-color: #fff;
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const AdminTitle = styled.p`
  display: block;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Form = styled.form`
  
`;

export const UnsplashLink = styled.a`
  display: block;
  margin: 15px 0 10px;
  border-radius: 4px;
  padding: 5px 10px 4px;
  color: var(--popupBgColor);
  text-align: center;
  background-color: var(--secondColorLight);
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: var(--secondColor);
  }
`;

export const ErrorSpan = styled.span`
  position: absolute;
  right: 0;
  top: 70px;
  font-size: 13px;
  text-align: right;
  color: var(--popupInputError);
  opacity: ${props => props.error ? 1 : 0};
  visibility: ${props => props.error ? 'visible' : 'hidden'};
  transform: ${props => props.error ? 'translateX(0)' : 'translateX(-20px)'};
  transition: all 0.3s ease-in-out;
`;

export const PureLabel = styled.label`
  position: relative;
  margin: ${props => props.margin ? props.margin + 'px' : 0};
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${props => props.align ? props.align : 'auto'};
  justify-content: ${props => props.justify ? props.justify : 'auto'};
  margin: ${props => props.margin ? props.margin + 'px' : 0};
`;


