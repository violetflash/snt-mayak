import React from 'react';
import styled from 'styled-components';
import {Button} from "../../../ui";

const AlertArticle = styled.article`

`;

const AlertTitle = styled.h3`
  margin-bottom: 20px;
`;

const HighLighted = styled.span`
  padding: 5px 10px;
  background-color: #f6c971;
  color: #000;
  border-radius: 4px;

  span {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: -1px;
      width: 100%;
      height: 2px;
      background-color: #414141;
    }
  }
`;

const AlertBody = styled.p`
  text-indent: 40px;
  line-height: 1.6;
  text-align: justify;
`;


export const Alerts = () => {
  return (
    <AlertArticle>
      <AlertTitle>
        <HighLighted><span>32.10.2021 в 25:00</span></HighLighted> состоится собрание собственников участков СНТ
      </AlertTitle>
      <AlertBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur dolorum eaque enim iusto nam obcaecati
        quisquam reprehenderit sint sit! Accusamus atque aut dolore ea porro quod sunt veniam vero.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur dolorum eaque enim iusto nam
        obcaecati quisquam reprehenderit sint sit! Accusamus atque aut dolore ea porro quod sunt veniam vero.
      </AlertBody>
      <Button onClick={null} text="Чисто для теста" margin="0 0 0 15px" color="#000"/>
    </AlertArticle>
  );
};
