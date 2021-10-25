import styled from 'styled-components/macro';
import bg from '../../assets/bg/card.svg';

const StyledCard = styled.div`
  max-width: 400px;
  min-height: 600px;
  background-image: url(${bg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: initial;
  //box-shadow: 1px 1px 2px #000;
`;

export const NewsCard = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
};
