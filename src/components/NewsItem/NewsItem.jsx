import React from 'react';
import { Img } from 'react-image'

// import Skeleton from 'react-loading-skeleton';
import { textCutter } from "../../functions/functions";
import { Badge } from "../ui/Badge/Badge";

import Loader from "../Loader";
import { Div, FlexContainer, ParagraphText } from "../ui/";
import { Button } from "../ui";
import { BadgeWrapper, DateTime, Details, Figure, NewsCard, TextWrapper, Title } from "./styles";

export const NewsItem = ({ title, desc, date, time, imageUrl }) => {
  return (
    <Div>
      <NewsCard>
        <Figure>
          <Img src={imageUrl} loader={<Loader/>}/>
        </Figure>
        <TextWrapper>
          <Title margin="0 0 0.5rem" fz="20px">{title}</Title>
          <DateTime>{date} - {time}</DateTime>
          <Details>
            <ParagraphText>{textCutter(desc, 100)}</ParagraphText>
            <FlexContainer justify="flex-end">
              <Button text="Перейти к новости" margin="10px 0 0 auto"/>
            </FlexContainer>
          </Details>
        </TextWrapper>
        <BadgeWrapper>
          <Badge date={date}/>
        </BadgeWrapper>
      </NewsCard>
    </Div>
  );
};


