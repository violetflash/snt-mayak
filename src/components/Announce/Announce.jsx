import React from 'react';
import { H3Title } from "../ui/";
import styled from "styled-components";
import {TextBlockProps} from "../ui/sharedStyles";

const AnnounceArticleWrapper = styled.article`
  padding: 20px;
`;

const AnnounceArticle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  border: 4px solid #8ebe9b;
  border-bottom: none;
  border-right: none;
`;

const HighLighted = styled.span`
  position: absolute;
  top: -22px;
  left: 50px;
  text-align:left;
  width: calc(100% - 50px);
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--announceDescBgColor);
  border-radius: 4px 4px 0 0;
  color: #000;
  font-size: 18px;
  font-style:italic;
  font-weight: 700;
`;

const AnnounceTitle = styled.h3`
  //position: absolute;
  ${TextBlockProps};
  margin-top: 20px;
  padding: 10px 20px;
  background-color: var(--announceDescBgColor);
  top: -15px;
  z-index: 2;
  max-width: 250px;

  
  //&::before,
  //&::after {
  //  content: "";
  //  position: absolute;
  //  width: 4px;
  //  height: 20px;
  //  background-color: #8ebe9b;
  //  transform: rotate(-20deg);
  //  top: 11px;
  //  left: 1px;
  //  border-radius: 4px;
  //}
  //
  //&::after {
  //  left: unset;
  //  right: 1px;
  //  transform: rotate(20deg);
  //}
`;

const AnnounceBody = styled.div`
  color: var(--darkColor);
  padding: 40px 20px 20px;
  
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
  border-radius: 2px;
  border-bottom: 1px dashed;
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
    <AnnounceArticleWrapper>
      <AnnounceArticle>
        <HighLighted><span>{date} в {time}</span></HighLighted>
        <AnnounceTitle align="center">
          {title}
        </AnnounceTitle>
        <AnnounceBody>
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


    </AnnounceArticleWrapper>
  );
};
