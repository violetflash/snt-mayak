import React from 'react';
import {Img} from 'react-image'
import styled from 'styled-components';
// import Skeleton from 'react-loading-skeleton';
import {textCutter} from "../../../functions/functions";
import {Badge} from "../../ui/Badge/Badge";

import s from './newsSliderSlide.module.scss';
import Loader from "../../Loader";
import {H3Title} from "../../ui/sharedStyles";
import {Button} from "../../ui";


const BadgeWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 20px;
`;

const AlertArticle = styled.article`

`;

const HighLighted = styled.span`
  display: block;
  padding: 10px 10px;
  background-color: #f6c971;
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

const AlertBody = styled.div`
  padding: 0 40px;
  
`;

const AlertDesc = styled.p`
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
    background-image: url('../../../assets/icons/plus.svg');
    background-repeat: no-repeat;
    background-position: left;
    background-size: 20px;
  }
`;

const ProposalForm = styled.div`
  text-align: right;
`;



export const SliderSlide = ({ type, title, desc, date, time, imageUrl }) => {
  const newsSlide = type === 'news' ?
    <div className={s.wrapper}>
      <div className={s.card}>

        <figure className={s.card__figure}>
          <Img src={imageUrl} loader={<Loader/>}/>
          {/*<img src={imageUrl} alt={title} className={s.card__image}/>*/}
        </figure>
        <div className={s.card__textWrapper}>
          <h3 className={s.card__title}>{title}</h3>
          <time className={s.card__dateTime}>{date} - {time}</time>
          <div className={s.card__details}>
            <p className={s.card__desc}>{textCutter(desc, 100)}</p>
            <button className={s.card__more} disabled>Перейти к новости</button>
          </div>
        </div>
        <BadgeWrapper>
          <Badge date={date}/>
        </BadgeWrapper>
      </div>
    </div> : null
  ;

  const alertsSlide = type === 'alerts' ?
    <AlertArticle>
      <HighLighted><span>{date} в {time}</span></HighLighted>
      <AlertBody>
        <H3Title margin="20px 0" >
          {title}
        </H3Title>
        <AlertDesc>
          {desc}
        </AlertDesc>
        <ProposalForm>
          <AddProposalButton>
            Внести своё предложение для обсуждения
          </AddProposalButton>
        </ProposalForm>


      </AlertBody>

    </AlertArticle> : null
  ;

  return type === 'news' ? newsSlide :
    type === 'alerts' ? alertsSlide : null;
};

