import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  min-height: calc(100% - 132px); //header вне процентов страницы, поэтому он выпадает из 100%. Нужно его точно посчитать
  
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

export const ContentFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const PageContent = styled.section`
  flex: 1 1 auto;
`;

export const PageFooter = styled.footer`
  display: flex;
  flex: 0 0 auto;
  //justify-content: flex-end;
  
`;
