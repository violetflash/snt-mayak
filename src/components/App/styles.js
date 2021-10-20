import styled, { css } from 'styled-components';

const lightTheme = css`
  --mainColor: #000;
  --bgColor: #fff;
  --logoColor: #808285;
  --userMenuLine: #d9dce3;
`;

const darkTheme = css`
  --mainColor: #fff;
  --bgColor: #1e2131;
  --logoColor: #eecb2f;
  --userMenuLine: #2b324b;
  --alertsSectionBgColor: #575151;
  --pageTitleColor: #c5c3c3;
  --alertsDescBgColor: #a6a5a3;
`;

export const PageContainer = styled.div`
  color: var(--mainColor);
  background-color: var(--bgColor);
  ${props => props.mode === 'light' ? lightTheme : darkTheme};
  position: relative;
  min-height: 100%;
  transition: all 0.3s ease-in-out;

  //&::before {
  //  content: "";
  //  position: absolute;
  //  bottom: 0;
  //  //border-bottom: 2px solid saddlebrown;
  //  width: 100%;
  //  height: 80px;
  //  //background-color: var(--announceSectionBgColor);
  //  background-color: var(--heroBgColor);
  //}
`;

export const ContentFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const PageContent = styled.section`
  flex: 1 1 auto;
`;

export const PageFooter = styled.footer`
  display: flex;
  flex: 0 0 auto;
  //justify-content: flex-end;
  
`;
