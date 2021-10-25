import styled from 'styled-components';
import bg from '../../assets/bg/backdown.svg';

export const FooterContainer = styled.div`
  position: relative;
  display: flex;
  
  flex: 0 0 auto;
  padding: 50px 0 0;
  background-image: url(${bg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 2400px;
  //min-height: calc(100% - 132px); //header вне процентов страницы, поэтому он выпадает из 100%. Нужно его точно посчитать
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: var(--heroBgColor);
  }
`;

export const FooterContent = styled.section`
  display: flex;
  justify-content: space-between;
  //align-items: flex-end;
  height: 100%;
`;

export const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 20px;
  flex-grow: 1;
  
`;

export const GirlWrapper = styled.div`
  //margin: ${props => props.position === 'left' ? '0 0 0 auto' : '0 auto 0 0'};
  display: flex;
  align-items: flex-end;
  
`;

export const ContentWrapper = styled.div`
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
  margin: 40px 0 0 50px;
  flex-grow: 1;
  width: 100%;
`;
