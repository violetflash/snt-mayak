import React from 'react';
import { FlexContainer, AnimatedText } from "../ui";

import {DateTime, Title, AnnounceDesc, AnnounceInfo} from "./styles";

export const AnnounceItem = ({ date, time, title, desc }) => {
  return (
    <FlexContainer justify="space-between">
      <AnnounceInfo>
        <DateTime>{date} - {time}</DateTime>
        <Title>{title}</Title>
        <AnimatedText text={title}/>
      </AnnounceInfo>
      <AnnounceDesc>
        {desc}
      </AnnounceDesc>
    </FlexContainer>
  );
};
