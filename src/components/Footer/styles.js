import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 auto;
  padding: 50px 0 0;
  //min-height: calc(100% - 132px); //header вне процентов страницы, поэтому он выпадает из 100%. Нужно его точно посчитать
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    //border-bottom: 2px solid saddlebrown;
    width: 100%;
    height: 80px;
    //background-color: var(--announceSectionBgColor);
    background-color: var(--heroBgColor);
  }
`;

export const FooterContent = styled.section`
  display: flex;
  
`;

export const GirlWrapper = styled.div`
  margin: ${props => props.position === 'left' ? '0 auto 0 0' : '0 0 0 auto'};
`;