import styled from "styled-components";
import { TextBlockProps } from "../ui/sharedStyles";

export const BadgeWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 20px;
`;

export const Figure = styled.figure`
  display: block;
  margin: 0;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  padding: 0;
  height: 420px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    transform: scale(1.01);
    transition: transform 4s ease;
  }
`;

export const Title = styled.h3`
  ${TextBlockProps}
`;

export const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding: 25px 15px;
  width: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  transform: scale(1.01);
  transition: background-color 1s ease;
`;

export const DateTime = styled.time`
  display: block;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #fff;
`;

export const Details = styled.div`
  max-height: 0;
  opacity: 0;
  transition: max-height 0.5s ease, opacity 0.5s ease;
`;

export const NewsCard = styled.article`
  position: relative;
  display: block;
  overflow: hidden;
  //border: 1px solid var(--secondColor);
  //border-radius: 4px;
  min-height: 410px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  backface-visibility: hidden;

  &:hover {
    ${Details} {
      max-height: 150px;
      opacity: 1;
    }

    ${TextWrapper} {
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${Figure} img {
      transform: scale(1.2);
    }
    
    ${Title} {
      color: var(--newsItemTitleOnHoverColor);
    }
  }
`;

