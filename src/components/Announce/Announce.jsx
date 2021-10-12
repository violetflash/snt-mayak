import React from 'react';
import { H3Title } from "../ui/";
import styled from "styled-components";

const AnnounceArticle = styled.article`

`;

const HighLighted = styled.span`
  display: block;
  padding: 10px 10px;
  background-color: var(--announceDateTimeColor);
  color: #000;
  font-size: 14px;
  font-style:italic;
  font-weight: 700;
  text-align:right;
  //border-radius: 4px;
  //border: 2px solid #414141;

  //span {
  //  position: relative;
  //
  //  &::before {
  //    content: "";
  //    position: absolute;
  //    bottom: -1px;
  //    width: 100%;
  //    height: 2px;
  //    //background-color: #414141;
  //    border-bottom: 2px dotted #414141;
  //  }
  //}
`;

const AnnounceBody = styled.div`
  padding: 0 40px;
  color: var(--darkColor);
  
`;

const AnnounceDesc = styled.p`
  text-indent: 40px;
  line-height: 1.6;
  text-align: justify;
  
`;

const AddProposalButton = styled.button`
  display: inline-block;
  position: relative;
  margin: 20px 0 0;
  padding: 5px;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.3s;
  
  &:hover {
    background-color: var(--alertsButtonOnHoverColor);
  }
  
  &::before {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    //background-color: #000;
    //background-image: url('../../../assets/icons/plus.svg');
    background-repeat: no-repeat;
    background-position: left;
    background-size: 20px;
  }
`;

const ProposalForm = styled.div`
  text-align: right;
`;

export const Announce = ({ date, time, title, desc }) => {
  return (
    <AnnounceArticle>
      <HighLighted><span>{date} в {time}</span></HighLighted>
      <AnnounceBody>
        <H3Title margin="30px 0 20px" align="center">
          {title}
        </H3Title>
        <AnnounceDesc>
          {desc}
        </AnnounceDesc>
        <ProposalForm>
          <AddProposalButton>
            Внести своё предложение для обсуждения
          </AddProposalButton>
        </ProposalForm>


      </AnnounceBody>

    </AnnounceArticle>
  );
};
