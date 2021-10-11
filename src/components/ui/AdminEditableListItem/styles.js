import styled, {css} from "styled-components";

export const Li = styled.li`
  position: relative;
  display: flex;
  border: 1px solid var(--secondColor);
  border-radius: 0 4px 0 0;
  font-size: 14px;

  &::before {
    content: attr(data-index);
    position: absolute;
    display: ${props => props.type === 'news' ? 'block' : 'none'};
    left: 0;
    top: 0;
    border-right: 1px solid var(--secondColorLight);
    border-bottom: 1px solid var(--secondColorLight);
    border-radius: 0 0 4px;
    padding: 2px 4px;
    color: var(--mainColor);
    background-color: var(--secondColor);
  }
`;

export const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.fz ? props.fz : '26px'};
  flex: 0 0 70px;
  border-right: 1px solid var(--secondColor);
  border-left: 1px solid var(--secondColor);
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #ccc;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const InfoTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px;
  color: var(--mainColor);
  background-color: var(--secondColorLight);

  span {
    margin-right: 10px;
  }
`;

export const DateInfo = styled.span`
  
`;

export const TitleInfo = styled.span`
  font-weight: 700;
`;

export const AuthorInfo = styled.span`
  font-style: italic;
  font-size: 12px;
  text-align: right;
`;

export const Controls = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
`;

const sharedButtonStyles = css` //just for testing
  display: block;
  width: 16px;
  height: 16px;
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Button = styled.button`
  ${sharedButtonStyles};
  margin-right: 10px;
  background-image: url(${props => props.icon});
`;

export const Description = styled.p`
  padding: 5px;
  font-style: italic;
`;